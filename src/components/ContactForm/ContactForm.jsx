import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addContact } from "store/contactsSlice";

import InputField from "components/InputField/InputField";
import Btn from "components/Btn/Btn";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

const formFields = [
  {
    name: "name",
    label: "Name",
    value: "",
    rules: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    "data-test": "ok",
  },
  {
    name: "number",
    label: "Number",
    value: "",
    rules: Yup.string()
      .trim()
      .matches(/^[0-9+-]+$/, "Only numbers and symbols + and - are allowed")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  },
];

const validationSchema = Yup.object().shape(
  formFields.reduce(
    (schema, { name, rules }) => ({ ...schema, [name]: rules }),
    {}
  )
);

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = formFields.reduce(
    (fields, field) => ({ ...fields, [field.name]: field.value }),
    {}
  );

  const formSchema = formFields.map(({ value, rules, ...field }) => ({
    ...field,
    id: useId(),
  }));

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => {
        return (
          <Form className={styles.form}>
            {formSchema.map((field) => (
              <Field
                key={field.id}
                component={InputField}
                error={touched?.[field.name] && errors?.[field.name]}
                {...field}
              />
            ))}
            <Btn type="submit" size="md">
              Add contact
            </Btn>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;

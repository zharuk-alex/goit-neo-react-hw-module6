import InputField from "components/InputField/InputField";
import { FormikProvider, Field, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "store/selectors";
import { changeFilter } from "store/filtersSlice";
import debounce from "lodash.debounce";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: nameFilter,
    },
  });

  const { values } = formik;
  const debouncedChange = debounce(
    () => dispatch(changeFilter(values?.["name"])),
    500
  );

  useEffect(() => {
    debouncedChange(values?.["name"]);
    return () => {
      debouncedChange.cancel();
    };
  }, [values?.["name"]]);

  return (
    <FormikProvider value={formik}>
      <Field
        name="name"
        type="text"
        label="Find contacts by name"
        component={InputField}
      />
    </FormikProvider>
  );
};

export default SearchBox;

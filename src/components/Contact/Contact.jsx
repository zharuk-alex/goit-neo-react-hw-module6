import styles from "./Contact.module.css";
import { MdPhone, MdPerson } from "react-icons/md";
import Btn from "components/Btn/Btn";
import { useDispatch } from "react-redux";
import { deleteContact } from "store/contactsSlice";

export default ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactItem}>
      <div>
        <div className={styles.contactInfo}>
          <MdPerson />
          {name}
        </div>
        <div className={styles.contactInfo}>
          <MdPhone />
          {number}
        </div>
      </div>
      <Btn
        text="delete"
        onClick={() => dispatch(deleteContact(id))}
        size="sm"
      />
    </div>
  );
};

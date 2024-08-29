import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import Contact from "components/Contact/Contact";
import { selectNameFilter, selectContacts } from "store/selectors";

export default () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts?.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

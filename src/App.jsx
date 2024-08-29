import ContactForm from "components/ContactForm/ContactForm";
import SearchBox from "components/SearchBox/SearchBox";
import ContactList from "components/ContactList/ContactList";

import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </section>
    </main>
  );
}

export default App;

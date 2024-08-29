import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "store/selectors";
import { changeFilter } from "store/filtersSlice";
import { MdClose } from "react-icons/md";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };

  const handleClear = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.formInput}
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search contact"
      />
      {!!nameFilter && (
        <MdClose className={styles.clearIcon} onClick={handleClear} />
      )}
    </div>
  );
};

export default SearchBox;

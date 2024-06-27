import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch, setRequest }) => {
  const notify = () => toast.error("Please, enter the keyword!");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const value = form.elements.searchBar.value.trim();
    setRequest(value);

    if (value === "") {
      notify();
      return;
    }
    setRequest(value);
    onSearch(value);
    form.reset();
  };

  return (
    <header className={css.searchHeader}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchBar"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;

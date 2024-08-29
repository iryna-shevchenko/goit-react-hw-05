import { useState } from "react";
import css from "./SearchForm.module.css";
import { FcSearch } from "react-icons/fc";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={css.input}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
        />
        <button type="submit" className={css.button}>
          <FcSearch className={css.icon} />
        </button>
      </form>
    </>
  );
};

export default SearchForm;

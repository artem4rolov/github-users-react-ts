import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { useRef } from "react";
import { Button } from "components/Button";
interface SearchProps {}

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // говорим ts что это htmlInput элемент
  const searchRef = useRef<HTMLInputElement | null>(null);
  console.log(searchRef);
  // при отправке формы...
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // берем значение инпута
    const text = searchRef.current?.value || "";
    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = "";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          name="user_name"
          placeholder="Search Github username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>{" "}
    </form>
  );
};

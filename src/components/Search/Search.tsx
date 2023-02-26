import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";
interface SearchProps {}

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

// тип для полей формы
// конкретно сейчас это один инпут
type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // типизируем event
  // даем понять форме, что мы используем ее внутренние поля с помощью типа FormFields
  // это дает возможность не использовать useRef
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
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

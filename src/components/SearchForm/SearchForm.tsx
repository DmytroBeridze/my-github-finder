import styles from "./SearchForm.module.scss";
import { ReactComponent as Find } from "../../resources/svg/magnifyng_glass.svg";
import { ControlButton } from "../ControlButton";
import { User } from "../../types/userTypes";

interface SearchFormProps {
  user: User | null;
  searchUser: (name: string) => void;
}

export const SearchForm = ({ searchUser, user }: SearchFormProps) => {
  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchUser(e.currentTarget.user.value.trim());
  };
  return (
    <form className={styles.searchForm} onSubmit={(e) => hendleSubmit(e)}>
      <Find className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search GitHub username..."
        name="user"
        autoComplete="off"
      />

      {user ? null : <span className={styles.noUser}>User not found</span>}
      <ControlButton children="search"></ControlButton>
    </form>
  );
};

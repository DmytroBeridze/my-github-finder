import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header";
import styles from "./HomePage.module.scss";
import { SearchForm } from "../../components/SearchForm";
import { GithubUser, User, UserError } from "../../types/userTypes";
import { userGuards } from "../../guards/userGuards";
import { reFormattingUser } from "../../utils/reFormattingUser";
import { fakeUser } from "../../components/fakeUser";
import { UserCard } from "../../components/UserCard";

export const HomePage = () => {
  const URL = "https://api.github.com/users/";
  const [theme, setTheme] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(fakeUser);
  const themeChange = () => {
    setTheme(!theme);
  };
  const searchUser = async (name: string): Promise<void> => {
    if (name.trim()) {
      try {
        const response = await fetch(URL + name);
        // if (!response.ok) throw new Error("Error request");

        const dataUser = (await response.json()) as GithubUser | UserError;
        if (userGuards(dataUser)) {
          setUser(reFormattingUser(dataUser));
        } else setUser(null);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    }
  };

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", "dark");
    } else document.body.setAttribute("data-theme", "light");
  }, [theme]);

  return (
    <div className={styles.homePage}>
      <Container>
        <Header themeChange={themeChange} theme={theme} />
        <SearchForm searchUser={searchUser} user={user} />
        <UserCard user={user} />
      </Container>
    </div>
  );
};

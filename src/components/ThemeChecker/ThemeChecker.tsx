import styles from "./ThemeChecker.module.scss";

import { ReactComponent as Sun } from "../../resources/svg/sun.svg";
import { ReactComponent as Moon } from "../../resources/svg/moon.svg";

interface ThemeCheckerProps {
  themeChange: () => void;
  theme: boolean;
}
export const ThemeChecker = ({ themeChange, theme }: ThemeCheckerProps) => {
  return (
    <div className={styles.themeChecker} onClick={themeChange}>
      <span className={styles.themeName}>{theme ? "light" : "dark"}</span>
      {theme ? (
        <Sun className={styles.themeChecker__icon} />
      ) : (
        <Moon className={styles.themeChecker__icon} />
      )}
    </div>
  );
};

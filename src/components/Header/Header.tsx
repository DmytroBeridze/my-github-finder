import { ThemeChecker } from "../ThemeChecker";
import styles from "./Header.module.scss";

interface HeaderProps {
  themeChange: () => void;
  theme: boolean;
}

export const Header = ({ themeChange, theme }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h3>devfinder</h3>
      <ThemeChecker themeChange={themeChange} theme={theme} />
    </div>
  );
};
// ----------------------------------------------
// /src
//   /components
//     /Header
//         Header.module.scss
//         Header.tsx
//         index.ts
//   /pages
//     /HomePage.js
//         HomePage.module.scss
//         HomePage.tsx
//         index.ts
//   /style
//   App.js
//   index.js

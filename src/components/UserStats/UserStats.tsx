import { User } from "../../types/userTypes";
import styles from "./UserStats.module.scss";

interface UserStatsProps
  extends Pick<User, "followers" | "following" | "repos"> {}

export const UserStats = ({ ...props }: UserStatsProps) => {
  const elements = ["repos", "following", "followers"];
  const data = [props.repos, props.following, props.followers];
  return (
    <ul className={styles.userStats}>
      {elements.map((elem, i) => {
        const capitalizedElem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
        return (
          <li key={elem}>
            <div>{capitalizedElem}</div>
            <div>{data[i]}</div>
          </li>
        );
      })}
    </ul>
  );
};

import { UserCardProps } from "../UserCard";
import styles from "./UserInfo.module.scss";

interface UserInfoProps {
  login: string;
  name: string;
  createdAt: string;
  email: string | null;
  bio: string | null;
}
// interface UserInfoProps extends UserCardProps {}

export const UserInfo = ({ ...props }: UserInfoProps) => {
  const date = new Date(props.createdAt);

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const dataFormated = formatter.format(date);
  return (
    <div className={styles.userInfo}>
      <ul className={styles.userInfoName}>
        <li>{props.login}</li>
        <li>{props.name}</li>
        <li>
          email:
          <span
            className={`${styles.mail} ${props.email ? "" : styles.noElement}`}
          >
            {` ${props.email || "no email"}`}
          </span>
        </li>
        <li>
          {" "}
          bio:{" "}
          <span className={`${props.bio ? "" : styles.noElement}`}>
            {props.bio || "no bio"}
          </span>
        </li>
      </ul>
      <div className={styles.userInfoDate}>Joined {dataFormated}</div>
    </div>
  );
};

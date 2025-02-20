import { User } from "../../types/userTypes";
import { UserInfo } from "../UserInfo";
import { UserPhoto } from "../UserPhoto";
import { UserStats } from "../UserStats/UserStats";
import styles from "./UserCard.module.scss";

export interface UserCardProps {
  user: User | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  console.log(user);

  return (
    user && (
      <div className={styles.userCard}>
        <UserPhoto avatar={user.avatar} name={user.name} />

        <UserInfo
          login={user.login}
          name={user.name}
          createdAt={user.createdAt}
          email={user.email}
          bio={user.bio}
        />

        <UserStats
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />
      </div>
    )
  );
};

import style from "./UserPhoto.module.scss";

interface UserPhotoProps {
  avatar: string | undefined;
  name: string;
}

export const UserPhoto = ({ avatar, name }: UserPhotoProps) => {
  return (
    <div className={style.userPhoto}>
      <img src={avatar} alt={name} />
    </div>
  );
};

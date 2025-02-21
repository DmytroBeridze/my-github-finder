import styles from "./UserMeta.module.scss";
import { User } from "../../types/userTypes";
import { ReactComponent as Chain } from "../../resources/svg/chain.svg";
import { ReactComponent as Location } from "../../resources/svg/location.svg";
import { ReactComponent as Office } from "../../resources/svg/office.svg";
import { ReactComponent as Twitter } from "../../resources/svg/TWITTER.svg";

interface UserMetaProps
  extends Pick<User, "blog" | "location" | "twitter" | "company"> {}

interface MetaDataProps {
  isLink?: boolean;
  icon: React.ReactNode;
  value: string | null;
}

export const UserMeta = ({ ...props }: UserMetaProps) => {
  const metaData: MetaDataProps[] = [
    {
      value: props.blog,
      icon: <Chain />,
      isLink: true,
    },
    {
      value: props.company,
      icon: <Office />,
    },
    {
      value: props.location,
      icon: <Location />,
    },
    {
      value: props.twitter,
      icon: <Twitter />,
      isLink: true,
    },
  ];

  return (
    <ul className={styles.meta}>
      {metaData.map(({ value, icon, isLink }, i) => {
        let link = value?.startsWith("http") ? value : `https://${value}`;

        const data =
          value && isLink ? (
            <a href={link}>{value}</a>
          ) : (
            <span className={!value ? `noElement` : ""}>
              {value || "no data"}
            </span>
          );
        console.log(link);

        return (
          <li key={i}>
            <span>{icon} </span>
            {data}
          </li>
        );
      })}
    </ul>
  );
};

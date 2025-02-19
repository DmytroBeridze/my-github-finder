import styles from "./ControlButton.module.scss";

interface ControlButtonProps {
  children: string;
}
export const ControlButton = ({ children }: ControlButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};

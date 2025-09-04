import { type DetailedHTMLProps } from "react";
import styles from "./button.module.css";

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...props }: Props) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}

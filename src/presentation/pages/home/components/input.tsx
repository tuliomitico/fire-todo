import type { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={styles.container} />;
}

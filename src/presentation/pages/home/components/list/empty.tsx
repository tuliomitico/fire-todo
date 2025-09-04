import { Clipboard } from "phosphor-react";
import styles from "./empty.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      <Clipboard size={56} color="#333333" weight="thin" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}

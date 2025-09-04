import styles from "./header.module.css";

interface ListHeaderProps {
  taskCounter: number;
  checkedTaskCounter: number;
}

export function ListHeader({
  taskCounter,
  checkedTaskCounter,
}: ListHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>
          {taskCounter === 0
            ? taskCounter
            : `${checkedTaskCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  );
}

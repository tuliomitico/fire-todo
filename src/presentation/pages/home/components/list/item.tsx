import { Check, Trash } from "phosphor-react";

import { type Task } from "@/presentation/pages";

import styles from "./item.module.css";

type ItemProps = {
  task: Task;
  onRemoveTask: (id: string) => void;
  onFinishTask: ({ id, isDone }: { id: string; isDone: boolean }) => void;
};

export function Item({ task, onRemoveTask, onFinishTask }: ItemProps) {
  function handleFinishTask() {
    onFinishTask({
      id: task.id,
      isDone: !task.isDone,
    });
  }
  function handleRemoveTask() {
    onRemoveTask(task.id);
  }

  const checkboxCheckedClassname = task.isDone
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = task.isDone
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleFinishTask}>
          <input readOnly type="checkbox" checked={task.isDone} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.isDone && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {task.content}
          </p>
        </label>
      </div>

      <button onClick={handleRemoveTask}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}

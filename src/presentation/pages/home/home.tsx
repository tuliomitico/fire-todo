import { PlusCircle } from "phosphor-react";
import { Button, Header, Input } from "./components";
import { ListHeader } from "./components/list/header";
import { useState } from "react";
import { Empty } from "./components/list/empty";
import { Item } from "./components/list/item";
import styles from "./home.module.css";

export interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");

  const tasksDoneCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isDone) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  function removeTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Tem certeza que deseja deletar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function finishTask({ id, isDone }: { id: string; isDone: boolean }) {
    const finishedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone,
        };
      }
      return { ...task };
    });
    setTasks(finishedTasks);
  }

  function handleAddTask() {
    if (!value) return;

    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      content: value,
      isDone: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setValue("");
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            value={value}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            taskCounter={tasks.length}
            checkedTaskCounter={tasksDoneCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  task={task}
                  onRemoveTask={removeTask}
                  onFinishTask={finishTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  function handleAddTask() {
    setTasks(["Выучить React", ...tasks]);
  }
  function handleRemoveLastTask() {
    setTasks(
      tasks.filter((item) => {
        return item !== tasks.at(-1);
      })
    );
  }
  return (
    <>
      <h1>Список задач</h1>
      <button onClick={handleAddTask}>Добавить задачу</button>
      <button onClick={handleRemoveLastTask}>Удалить последнюю задачу</button>
      <ul>
        {tasks.map((item, index) => {
          return <TaskItem key={index} task={item} />;
        })}
      </ul>
    </>
  );
}

import { memo } from "react";

const TaskItem = memo(function TaskItem({ task }) {
  console.log("TaskItem");
  return <li>{task}</li>;
});

export default TaskItem;

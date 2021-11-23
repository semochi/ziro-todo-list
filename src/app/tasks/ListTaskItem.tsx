import React from "react";
import TaskItem from "./inc/TaskItem";

export default function ListTaskItem() {
  const [tasks, setTasks] = React.useState<Object[]>([
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
  ]);

  return (
    <>
      {tasks.map((task, i) => (
        <TaskItem {...task} key={i} />
      ))}
    </>
  );
}

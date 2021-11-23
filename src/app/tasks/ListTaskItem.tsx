import React from "react";
import styled from "styled-components";
import TaskItem from "./inc/TaskItem";

export default function ListTaskItem() {
  const [tasks, setTasks] = React.useState<Object[]>([
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
  ]);

  return (
    <Content>
      {tasks.map((task, i) => (
        <TaskItem {...task} key={i} />
      ))}
    </Content>
  );
}

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 1em;
  @media (min-width: 766px) {
    flex: 1.5;
  }
  @media (min-width: 990px) {
    flex: 2;
  }
`;

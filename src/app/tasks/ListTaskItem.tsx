import styled from "styled-components";
import TaskInputSearch from "./inc/TaskInputSearch";
import TaskItem from "./inc/TaskItem";
interface Props {
  tasks: never[] | [];
  onUpdate: (values: any) => void | undefined;
  onSearch: (values: any) => void | undefined;
}
export default function ListTaskItem({ tasks, onUpdate, onSearch }: Props) {
  const handleRemove = (index: number) => {
    return onUpdate(tasks.filter((v, i) => i !== index));
  };

  const handleDetail = (index: number) => {
    console.log(index);
  };

  const handleUpdate = (index: number, value: any) => {
    console.log(index);
    console.log(value);
  };
  const handleSearch = (keywork: string) => {
    let results: any = [];
    tasks.forEach((elm: any) => {
      let textTitle: string = elm.title.toLowerCase();
      if (textTitle.indexOf(keywork.toLowerCase()) > 0) {
        return results.push(elm);
      }
    });

    return onSearch(results);
  };

  return (
    <Content>
      <BoxSearch>
        <h2>Todo list</h2>
        <TaskInputSearch onValue={handleSearch} />
      </BoxSearch>
      <ListTasks>
        {tasks.map((task, i) => (
          <TaskItem
            {...task}
            key={i}
            index={i + 1}
            task={task}
            onClickDetail={() => handleDetail(i)}
            onClickRemove={() => handleRemove(i)}
            onClickUpdate={(value: any) => handleUpdate(i, value)}
          />
        ))}
      </ListTasks>
    </Content>
  );
}

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 1em;
  background-color: #fff;
  @media (min-width: 766px) {
    flex: 1.5;
  }
  @media (min-width: 990px) {
    flex: 2;
  }
`;
const ListTasks = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 10px;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #0065a1;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0065a1;
  }
`;
const BoxSearch = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 25px;
  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

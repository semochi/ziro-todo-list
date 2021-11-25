import React from "react";
import styled from "styled-components";
import TaskInputSearch from "./inc/TaskInputSearch";
import TaskItem from "./inc/TaskItem";
import { BsFillTrashFill,BsCheck2All } from "react-icons/bs";
import { FormGroup } from "common/Form";
import { ButtonAction } from "common/Button";
interface Props {
  tasks: never[] | [];
  defaultTasks: never[] | [];
  onUpdate: (values: any) => void | undefined;
  onSearch: (values: any) => void | undefined;
}
export default function ListTaskItem({
  tasks,
  defaultTasks,
  onUpdate,
  onSearch,
}: Props) {

  const [isSearch, setIsSearch] = React.useState(false);

  const [options, setOptions] = React.useState<number[]>([]);

  // Todo: handle button remove one

  const handleRemove = (index: number) => {
    return onUpdate(tasks.filter((v, i) => i !== index));
  };

  // Todo: handle button update one

  const handleUpdate = (index: number, value: any) => {
    let results: any = [];
    tasks.forEach((task: Object, i) => {
      let newTask = { ...task, ...value };
      index === i ? results.push(newTask) : results.push(task);
    });
    return onUpdate(results);
  };

  // Todo: handle button search

  const handleSearch = (keywork: string) => {
    let results: any = [];
    tasks.forEach((elm: any) => {
      let textTitle: string = elm.title.toLowerCase();
      if (textTitle.indexOf(keywork.toLowerCase()) > -1) {
        results.push(elm);
      }
    });

    setIsSearch(true);
    return onSearch(results);
  };

  // Todo: handle on select check box

  const handleSelect = (e: any) => {
    let selects = options;
    if (e.target.checked) {
      selects = [...options, +e.target.value];
    } else {
      let index = selects.indexOf(+e.target.value);
      selects.splice(index, 1);
    }
    setOptions(selects);
  };

  // Todo: handle button remove many

  const handleRemoveMany = () => {
    let results: any = [];
    tasks.forEach((v, i) => {
      if (!options.includes(i)) results.push(v);
    });
    return onUpdate(results);
  };

  // Todo: handle button done many

  const handleDoneMany = () => {
    let results: any = [];
    tasks.forEach((task: Object, i) => {
      let newTask = { ...task, isDone: true };
      options.includes(i) ? results.push(newTask) : results.push(task);
    });
    return onUpdate(results);
  };

  // Todo: handle on close search

  const handleCloseSearch = () => {
    setIsSearch(false);
    onSearch(defaultTasks);
  };

  return (
    <Content>
      <BoxSearch>
        <h2>Todo list</h2>
        <TaskInputSearch
          isSearch={isSearch}
          onValue={handleSearch}
          onClose={handleCloseSearch}
        />
      </BoxSearch>
      <ListTasks>
        {tasks.map((task: any, i) => {
          let { isDone } = task;
          return (
            <TaskItem
              {...task}
              key={i}
              index={i + 1}
              task={task}
              isDone={isDone}
              onSelect={(e: any) => handleSelect(e)}
              onClickRemove={() => handleRemove(i)}
              onClickUpdate={(value: any) => handleUpdate(i, value)}
            />
          );
        })}
      </ListTasks>
      <BoxFooter>
        <span>Bluk Action</span>
        <FormGroup>
          <ButtonAction onClick={handleDoneMany}  name="Done" icon={<BsCheck2All/>} />
          <ButtonAction outline onClick={handleRemoveMany}  name="Remove"  icon={<BsFillTrashFill/>}/>
        </FormGroup>
      </BoxFooter>
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
  height: calc(100vh - 200px);
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
    color: #0065a1;
    font-weight: 700;
    padding: 0 0.5em;
  }
`;
const BoxFooter = styled.div`
  height: 80px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background: #f1f1f1;
  color: #4a4a4a;
  margin: 10px 0;
  padding: 0 1em;
  border-radius: 8px;
`;

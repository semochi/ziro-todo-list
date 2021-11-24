import Layouts from "./layouts/Layouts";
import ListTaskItem from "./app/tasks/ListTaskItem";
import AddTaskItem from "./app/tasks/AddTaskItem";
import { getAllTasks, updateTasks } from "./utils/stores";
import React from "react";
let items = getAllTasks("tasks");
function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    if (items.length > 0) (() => setTasks(items))();
  }, []);
  // create task
  const setNewTasks = (values: any) => {
    let data: any = [...tasks, values];
    setTasks(data);
    return updateTasks("tasks", data);
  };

  const handleUpdate = (values: any) => {
    setTasks(values);
    return updateTasks("tasks", values);
  };

  const handleSearch = (values: any) => {
    if(values.length > 0) {
      setTasks(values);
    }else {
      setTasks(items);
    }
  };

  return (
    <Layouts>
      <AddTaskItem onCreateTasks={setNewTasks} />
      <ListTaskItem
        tasks={tasks}
        onUpdate={handleUpdate}
        onSearch={handleSearch}
      />
    </Layouts>
  );
}

export default App;

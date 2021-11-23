import Layouts from "./layouts/Layouts";
import ListTaskItem from "./app/tasks/ListTaskItem";
import AddTaskItem from "./app/tasks/AddTaskItem";

function App() {
  return (
    <Layouts>
      <AddTaskItem />
      <ListTaskItem />
    </Layouts>
  );
}

export default App;

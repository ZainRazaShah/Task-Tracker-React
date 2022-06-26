import Todo from "./components/Todo";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="all-containers">
        <Todo />
        <InProgress />
        <Done />
      </div>
      <div className="add-task">
        <AddTask />
      </div>
    </>
  );
}

export default App;

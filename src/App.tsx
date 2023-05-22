import styles from "./App.module.css";
import "./global.css";
import Header from './Components/Header';
import { v4 }  from 'uuid';
import { ToDo } from "./Types/Todo";
import NewTaskForm from "./Components/NewTaskForm";
import TaskBox from "./Components/TaskBox";

const todos: ToDo[] = [
  /* {
    createdDate: new Date(),
    description: "Clean the dishes",
    id: v4(),
    isCompleted: false,
  },
  {
    createdDate: new Date(),
    description: "Wash the car",
    id: v4(),
    isCompleted: false,
  },
  {
    createdDate: new Date(),
    description: "Let the dogs out",
    id: v4(),
    isCompleted: true,
  } */
]

function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <Header></Header>
        <NewTaskForm></NewTaskForm>
        <TaskBox todoList={todos}></TaskBox>
      </div>
    </>
  )
}

export default App

import styles from "./App.module.css";
import "./global.css";
import Header from './Components/Header';
import { v4 }  from 'uuid';
import { ToDo } from "./Types/Todo";

const todos: ToDo[] = [
  {
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
  }
]

function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <Header></Header>
      </div>
    </>
  )
}

export default App

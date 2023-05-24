import styles from "./App.module.css";
import "./global.css";
import Header from './Components/Header';
import { v4 }  from 'uuid';
import { ToDo } from "./Types/Todo";
import NewTaskForm from "./Components/NewTaskForm";
import TaskBox from "./Components/TaskBox";

const todos: ToDo[] = [
  {
    createdDate: new Date(),
    description: "Let the cats out",
    id: v4(),
    isCompleted: true,
  },
  { 
    createdDate: new Date(),
    description: `Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.Manduma pindureta quium dia nois paga.A ordem dos tratores não altera o pão duris.Atirei o pau no gatis, per gatis num morreus.

    Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Si num tem leite então bota uma pinga aí cumpadi!Interagi no mé, cursus quis, vehicula ac nisi.`,
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
  }
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

import styles from "./App.module.css";
import "./global.css";
import Header from './Components/Header';
import { ToDo } from "./Types/Todo";
import NewTaskForm from "./Components/NewTaskForm";
import TaskBox from "./Components/TaskBox";
import { useState } from "react";

/* const todos: ToDo[] = [
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
]; */

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  
  function addToDo(newTodo: ToDo){
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(ToDoId: string){
    // look for the Todo to delete and remove it from the list
    setTodos(todos.filter((todo) => todo.id !== ToDoId));
  }

  function handleChangeTodoStatus(ToDoId: string){
    // look for the todo to update and chage its status
    const updatedTodos = todos.map((todo) => {
      if (todo.id === ToDoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Header></Header>
        <NewTaskForm onAddTodo={addToDo}></NewTaskForm>
        <TaskBox 
          todoList={todos} 
          onDeleteTodo={handleDeleteTodo} 
          onChangeTodoStatus={handleChangeTodoStatus} 
        />
      </div>
    </>
  )
}

export default App

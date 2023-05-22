import { ToDo } from '../Types/Todo';
import styles from './TaskBox.module.css';
import TaskInfo from './TaskInfo';
import TaskList from './TaskList';
import clipboard from '../assets/clipboard.svg';

interface TaskBoxProps {
    todoList: ToDo[];
}

function TaskBox({todoList}: TaskBoxProps){

   return (
        <div className={styles.taskBox}>
            <TaskInfo 
            createdCount={todoList.length}
            doneCount={todoList.filter(todo => todo.isCompleted).length} 
           />
            {todoList.length === 0 ? (
                <div>
                    <img src={clipboard} alt="clipboardImg" />
                    <p>Você ainda não tem taredas cadastradas</p>
                    <p>Crie tarefas e organize seus items a fazer</p>
                </div>
            ) : (
               <TaskList todolist={todoList}></TaskList>
            )}
           
        </div>
   );
}

export default TaskBox;
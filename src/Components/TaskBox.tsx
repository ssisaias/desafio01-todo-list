import { ToDo } from '../Types/Todo';
import styles from './TaskBox.module.css';
import TaskInfo from './TaskInfo';
import clipboard from '../assets/clipboard.svg';
import TaskItem from './TaskItem';

interface TaskBoxProps {
    todoList: ToDo[];
}

// move tasks marked as completed to the end of the list
const moveCompletedTasksDownTheList = (todoList: ToDo[]) => {
    return todoList.sort((a, b) => {
        if (a.isCompleted && !b.isCompleted) {
            return 1;
        } else if (!a.isCompleted && b.isCompleted) {
            return -1;
        } else {
            return 0;
        }
    });
};

function TaskBox({todoList}: TaskBoxProps){

   return (
        <div className={styles.taskBox}>
            <TaskInfo 
            createdCount={todoList.length}
            doneCount={todoList.filter(todo => todo.isCompleted).length} 
           />
            {todoList.length === 0 ? (
                <div className={styles.empty}>
                    <img src={clipboard} alt="clipboardImg" />
                    <div>
                        <p><strong>Você ainda não tem taredas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus items a fazer</p>
                    </div>
                </div>
            ) : (
               moveCompletedTasksDownTheList(todoList).map(td => (
                   <TaskItem key={td.id} todoItem={td} />
               ))
            )}
           
        </div>
   );
}

export default TaskBox;
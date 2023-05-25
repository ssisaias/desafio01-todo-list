import { ToDo } from '../Types/Todo';
import styles from './TaskItem.module.css';
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

interface TaskItemProps{
    todoItem: ToDo;
}

function TaskItem({todoItem}: TaskItemProps) {
  return (
    <div className={styles.taskItem}>
      {
        todoItem.isCompleted?
        <button className={styles.buttonCommon}><CheckCircle size={25} weight='fill' color='#8284FA'></CheckCircle></button>:
        <button className={styles.buttonCommon}><Circle weight="bold" size={25} color='#4EA8DE'></Circle></button>
      }
      <div className={todoItem.isCompleted?styles.descCompleted:styles.descNotCompleted}>
        <span className={styles.descText}>{todoItem.description}</span>
      </div>
      <button className={`${styles.buttonCommon} ${styles.deleteBtn}`}><Trash size={20} /></button>
    </div>
  );
}

export default TaskItem;
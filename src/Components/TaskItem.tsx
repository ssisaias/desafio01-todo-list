import { ToDo } from '../Types/Todo';
import styles from './TaskItem.module.css';

interface TaskItemProps{
    todoItem: ToDo;
}

function TaskItem({todoItem}: TaskItemProps) {
  return (
    <>
      <p>{todoItem.description}</p>
    </>
  );
}

export default TaskItem;
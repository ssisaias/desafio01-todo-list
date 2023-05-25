import styles from './NewTaskForm.module.css';
import { ToDo } from "../Types/Todo";
import { v4 } from 'uuid';
import { useState } from "react";

interface NewTaskFormProps {
    onAddTodo: (todo: ToDo) => void;
}

function NewTaskForm({onAddTodo}: NewTaskFormProps){
    const [currentDescription, setCurrentDescription] = useState('');
    function createTodo(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const newTodo: ToDo = {
            createdDate: new Date(),
            isCompleted: false,
            id: v4(),
            description: currentDescription
        }
        onAddTodo(newTodo);
        setCurrentDescription('');
    }

    function setInputText(e: React.ChangeEvent<HTMLInputElement>)
    {
        setCurrentDescription(e.target.value)
    }

    return(
        <div className={styles.newTaskForm}>
            <form>
                <input className={styles.newTaskInput} onChange={setInputText} placeholder='Adicione uma nova tarefa' type="text" value={currentDescription} />
                <button className={styles.newTaskButton} onClick={e => createTodo(e)} type='submit'> Criar ⊕</button>
            </form>
        </div>
    );
}

export default NewTaskForm;
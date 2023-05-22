import styles from './NewTaskForm.module.css';

function NewTaskForm(){
    return(
        <div className={styles.newTaskForm}>
            <form>
                <input className={styles.newTaskInput} placeholder='Adicione uma nova tarefa' type="text" />
                <button className={styles.newTaskButton} type='submit'> Criar ⊕</button>
            </form>
        </div>
    );
}

export default NewTaskForm;
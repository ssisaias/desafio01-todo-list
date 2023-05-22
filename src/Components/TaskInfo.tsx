import styles from './TaskInfo.module.css';


interface taskInfoProps{
    createdCount: number;
    doneCount: number;
}

function TaskInfo({createdCount, doneCount}: taskInfoProps){
    return(
        <div className={styles.infoContainer}>
            <span className={styles.created}>Tarefas criadas: {createdCount}</span>
            <span className={styles.done}>Concluídas: {doneCount}</span>
        </div>
    );
}

export default TaskInfo;
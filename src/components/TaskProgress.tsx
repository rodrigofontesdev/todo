import styles from "./TaskProgress.module.css"

export function TaskProgress() {
  return (
    <div className={styles.progress}>
      <div className={styles.created}>
        Tarefas criadas
        <span>0</span>
      </div>

      <div className={styles.done}>
        Concluídas
        <span>0</span>
      </div>
    </div>
  )
}

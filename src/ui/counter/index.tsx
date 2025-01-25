import styles from './styles.module.css'

type CounterProps = {
  created: number
  done: number
}

export function Counter({ created, done }: CounterProps) {
  return (
    <div className={styles.counter}>
      <div className={styles.created}>
        Tarefas criadas
        <span data-testid="created-tasks-counter">{created}</span>
      </div>

      <div className={styles.done}>
        Concluídas
        <span data-testid="done-tasks-counter">{created > 0 ? `${done} de ${created}` : 0}</span>
      </div>
    </div>
  )
}

import styles from "./Counter.module.css"

interface ICounter {
  created: number
  done: number
}

interface CounterProps {
  data: ICounter
}

export function Counter({ data }: CounterProps) {
  return (
    <div className={styles.counter}>
      <div className={styles.created}>
        Tarefas criadas
        <span>{data.created}</span>
      </div>

      <div className={styles.done}>
        Concluídas
        <span>{data.created > 0 ? `${data.done} de ${data.created}` : 0}</span>
      </div>
    </div>
  )
}

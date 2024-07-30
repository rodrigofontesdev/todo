import styles from './Counter.module.css'

type CounterProps = {
  amount: {
    created: number
    done: number
  }
}

export function Counter({ amount }: CounterProps) {
  return (
    <div className={styles.counter}>
      <div className={styles.created}>
        Tarefas criadas
        <span>{amount.created}</span>
      </div>

      <div className={styles.done}>
        Concluídas
        <span>{amount.created > 0 ? `${amount.done} de ${amount.created}` : 0}</span>
      </div>
    </div>
  )
}

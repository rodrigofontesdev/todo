import styles from './styles.module.css'

type TaskProps = {
  children: React.ReactNode
  isDone: boolean
}

export function Task({ children, isDone }: TaskProps) {
  return (
    <div
      className={`${styles.task} ${isDone && styles.done}`}
      data-testid="task-item"
    >
      {children}
    </div>
  )
}

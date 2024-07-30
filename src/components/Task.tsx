import { ReactNode } from 'react'

import styles from './Task.module.css'

type TaskProps = {
  children: ReactNode
  isDone: boolean
}

export function Task({ children, isDone }: TaskProps) {
  return <div className={`${styles.task} ${isDone ? styles.done : ''}`}>{children}</div>
}

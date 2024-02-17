import { Trash } from "@phosphor-icons/react"

import styles from "./Task.module.css"

interface TaskProps {
  content: string
  isDone?: boolean
}

export function Task({ content, isDone }: TaskProps) {
  return (
    <div className={`${styles.task} ${isDone ? styles.done : ""}`}>
      <div className={styles.formCheck}>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label htmlFor="checkbox">{content}</label>
      </div>

      <button className={styles.trashButton}>
        <Trash size={18} />
      </button>
    </div>
  )
}

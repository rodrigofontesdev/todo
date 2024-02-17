import { PlusCircle } from "@phosphor-icons/react"

import styles from "./NewTaskForm.module.css"

export function NewTaskForm() {
  return (
    <form className={styles.newTaskForm}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  )
}

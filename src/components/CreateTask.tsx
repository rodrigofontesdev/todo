import { PlusCircle } from "@phosphor-icons/react"

import styles from "./CreateTask.module.css"

export function CreateTask() {
  return (
    <form className={styles.formCreateTask}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  )
}

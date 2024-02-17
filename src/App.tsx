import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"
import { TaskProgress } from "./components/TaskProgress"

import styles from "./App.module.css"
import "./styles/global.css"

import clipboardImg from "./assets/clipboard.svg"

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <NewTaskForm />
          <TaskProgress />

          <div className={styles.empty}>
            <img src={clipboardImg} alt="Ícone de prancheta" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </>
  )
}

import { Empty } from "./components/Empty"
import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"
import { Task } from "./components/Task"
import { TaskProgress } from "./components/TaskProgress"

import styles from "./App.module.css"
import "./styles/global.css"

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <NewTaskForm />

          <TaskProgress />

          <Task content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          <Task content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          <Task content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          <Task
            content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
            isDone={true}
          />
          <Task
            content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
            isDone={true}
          />

          {/* <Empty /> */}
        </div>
      </main>
    </>
  )
}

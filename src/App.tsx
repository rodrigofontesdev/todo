import { Empty } from "./components/Empty"
import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { Task } from "./components/Task"
import { Progress } from "./components/Progress"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <CreateTask />

          <Progress />

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

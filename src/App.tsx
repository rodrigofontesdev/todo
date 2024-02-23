import { PlusCircle } from "@phosphor-icons/react"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Button } from "./components/Button"
import { Empty } from "./components/Empty"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Progress } from "./components/Progress"
import { Task } from "./components/Task"

import styles from "./App.module.css"
import "./global.css"

interface Task {
  id: string
  text: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState("")

  function handleAddTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: taskText,
      isDone: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")

    setTaskText(event.target.value)
  }

  function handleTaskTextOnInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <form className={styles.formCreateTask} onSubmit={handleAddTask}>
            <Input
              type="text"
              name="taskText"
              placeholder="Adicionar uma nova tarefa"
              value={taskText}
              onChange={handleTaskTextChange}
              onInvalid={handleTaskTextOnInvalid}
              required
            />
            <Button type="submit">
              Criar <PlusCircle size={18} weight="bold" />
            </Button>
          </form>

          <Progress />

          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task key={task.id} content={task.text} isDone={task.isDone} />
              )
            })
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </>
  )
}

import { PlusCircle, Trash } from '@phosphor-icons/react'
import { Button } from '@ui/Button'
import { Counter } from '@ui/Counter'
import { Empty } from '@ui/Empty'
import { Header } from '@ui/Header'
import { Input } from '@ui/Input'
import { Label } from '@ui/Label'
import { Task } from '@ui/Task'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import '@static/styles/global.css'
import styles from './App.module.css'

type Task = {
  id: string
  content: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskContent, setTaskContent] = useState('')
  const [doneTaskCounter, setDoneTaskCounter] = useState(0)

  function handleAddTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Task = {
      id: crypto.randomUUID(),
      content: taskContent,
      isDone: false,
    }

    setTasks([newTask, ...tasks])
    setTaskContent('')
  }

  function handleDeleteTask(taskId: string) {
    const deletedTask = tasks.find((task) => {
      return task.id === taskId
    })
    const updatedTasks = tasks.filter((task) => {
      return task.id !== taskId
    })

    if (deletedTask && deletedTask.isDone) {
      updateDoneTaskCounter(-1)
    }

    setTasks(updatedTasks)
  }

  function handleChangeTaskProgress(event: ChangeEvent<HTMLInputElement>) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === event.target.id) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }

      return task
    })

    setTasks(updatedTasks)
    updateDoneTaskCounter(event.target.checked ? 1 : -1)
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskContent(event.target.value)
  }

  function handleNewTaskContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function updateDoneTaskCounter(indicator: number) {
    const newCounter = doneTaskCounter + indicator

    setDoneTaskCounter(indicator < 0 && doneTaskCounter === 0 ? 0 : newCounter)
  }

  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <form
            className={styles.formCreateTask}
            onSubmit={handleAddTask}
          >
            <Input
              type="text"
              name="task"
              placeholder="Adicionar uma nova tarefa"
              value={taskContent}
              required
              onChange={handleNewTaskContentChange}
              onInvalid={handleNewTaskContentInvalid}
              data-testid="new-task-input"
            />

            <Button
              type="submit"
              data-testid="add-new-task"
            >
              Criar{' '}
              <PlusCircle
                size="1.125rem"
                weight="bold"
              />
            </Button>
          </form>

          <Counter amount={{ created: tasks.length, done: doneTaskCounter }} />

          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  isDone={task.isDone}
                >
                  <Label htmlFor={task.id}>
                    <Input
                      type="checkbox"
                      id={task.id}
                      defaultChecked={task.isDone}
                      onChange={handleChangeTaskProgress}
                    />

                    {task.content}
                  </Label>

                  <Button onClick={() => handleDeleteTask(task.id)}>
                    <Trash size="1.125rem" />
                  </Button>
                </Task>
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

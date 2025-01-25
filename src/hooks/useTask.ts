import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

type Task = {
  id: string
  content: string
  isDone: boolean
}

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskContent, setTaskContent] = useState('')
  const doneTasks = tasks.filter((task) => task.isDone)

  function handleAddTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Task = {
      id: crypto.randomUUID(),
      content: taskContent,
      isDone: false,
    }

    setTasks((state) => [...state, newTask])
    setTaskContent('')
  }

  function handleDeleteTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== taskId
    })

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
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskContent(event.target.value)
  }

  function handleNewTaskContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return {
    tasks,
    doneTasks,
    taskContent,
    handleAddTask,
    handleDeleteTask,
    handleNewTaskContentChange,
    handleNewTaskContentInvalid,
    handleChangeTaskProgress,
  }
}

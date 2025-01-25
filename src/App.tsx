import { useTask } from '@hooks/useTask'
import { PlusCircle, Trash } from '@phosphor-icons/react'
import { Button } from '@ui/button'
import { Counter } from '@ui/counter'
import { Empty } from '@ui/empty'
import { Header } from '@ui/header'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Task } from '@ui/task'

import '@static/styles/global.css'
import styles from './styles.module.css'

export function App() {
  const {
    tasks,
    doneTasks,
    taskContent,
    handleAddTask,
    handleNewTaskContentChange,
    handleNewTaskContentInvalid,
    handleChangeTaskProgress,
    handleDeleteTask,
  } = useTask()

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

          <Counter
            created={tasks.length}
            done={doneTasks.length}
          />

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

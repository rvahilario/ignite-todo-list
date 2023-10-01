import { todoListMock } from '../mocks'
import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from '@phosphor-icons/react'
import { Task } from './Task'

type TodoListProps = {}

export function TodoList({}: TodoListProps) {
	const [taskObject, setTaskObject] = useState(todoListMock)
	const [tasksCompleted, setTasksCompleted] = useState(0)
	const [totalTasks, setTotalTasks] = useState(0)
	const [taskInput, setTaskInput] = useState('')

	useEffect(() => {
		countTasksDone()
	}, [taskObject])

	function countTasksDone() {
		let totalTasks = Object.entries(taskObject).length
		let tasksCompleted = Object.entries(taskObject)?.filter(
			([_, todoItem]) => todoItem.isCompleted
		).length
		setTotalTasks(totalTasks)
		setTasksCompleted(tasksCompleted)
	}

	const handleUpdateTask = (taskId: string, task: TaskType) => {
		setTaskObject((prevState) => {
			return {
				...prevState,
				[taskId]: task,
			}
		})
	}

	const handleDeleteTask = (taskId: string) => {
		setTaskObject((prevState) => {
			const newState = { ...prevState }
			delete newState[taskId]
			return newState
		})
	}

	const handleCreateTask = () => {
		const newTaskId = uuidv4()
		const newTask: TaskType = {
			content: taskInput,
			isCompleted: false,
		}

		setTaskObject((prevState) => {
			return {
				[newTaskId]: newTask,
				...prevState,
			}
		})
		setTaskInput('')
	}

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<input
					className={styles.input}
					type="text"
					placeholder="Add a new task"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
				/>
				<button className={styles.createButton} onClick={handleCreateTask}>
					Create
					<PlusCircle size={'1rem'} weight="bold" />
				</button>
			</header>

			<div className={styles.contentList}>
				<header className={styles.contentHeader}>
					<label className={styles.tasksCreated}>
						Tasks created
						<span>{Object.entries(taskObject).length}</span>
					</label>

					<label className={styles.tasksCompleted}>
						Completed
						<span>{`${tasksCompleted} out of ${totalTasks}`}</span>
					</label>
				</header>

				{Object.entries(taskObject).map(([taskId, task]) => (
					<Task
						key={taskId}
						taskId={taskId}
						task={task}
						handleUpdateTask={handleUpdateTask}
						handleDeleteTask={handleDeleteTask}
					/>
				))}
			</div>
		</div>
	)
}

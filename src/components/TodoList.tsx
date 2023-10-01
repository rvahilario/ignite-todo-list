import { todoListMock } from '../mocks'
import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'

import { PlusCircle } from '@phosphor-icons/react'
import { TodoItem } from './TodoItem'

type TodoListProps = {}

export function TodoList({}: TodoListProps) {
	const [taskObject, setTaskObject] = useState(todoListMock)
	const [tasksCompleted, setTasksCompleted] = useState(0)
	const [totalTasks, setTotalTasks] = useState(0)

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

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<input
					className={styles.input}
					type="text"
					placeholder="Add a new todo"
				/>
				<button className={styles.createButton}>
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

				{Object.entries(taskObject).map(([itemId, todoItem]) => (
					<div key={itemId}>Task</div>
				))}
			</div>
		</div>
	)
}

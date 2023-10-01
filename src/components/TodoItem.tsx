import styles from './TodoItem.module.css'

import { Checkbox } from './Checkbox'
import { Trash } from '@phosphor-icons/react'

type ItemProps = {
	taskId: string
	task: TaskType
	handleUpdateTask: (id: string, task: TaskType) => void
	handleDeleteTask: (id: string) => void
}

export function TodoItem({
	taskId,
	task,
	handleUpdateTask,
	handleDeleteTask,
}: ItemProps) {
	const handleSetTaskCompleted = () => {
		const updatedTask = { ...task, isCompleted: !task?.isCompleted }
		handleUpdateTask(taskId, updatedTask)
	}

	return (
		<div className={styles.wrapper}>
			<Checkbox
				isChecked={task?.isCompleted}
				onChange={handleSetTaskCompleted}
			/>

			<span
				className={`${styles.content} ${task?.isCompleted && styles.checked}`}
			>
				{task.content}
			</span>
			<button
				className={styles.deleteButton}
				onClick={() => handleDeleteTask(taskId)}
			>
				<Trash />
			</button>
		</div>
	)
}

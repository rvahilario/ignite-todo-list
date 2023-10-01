import styles from './Task.module.css'

import { Checkbox } from './Checkbox'
import { Trash } from '@phosphor-icons/react'

type TaskProps = {
	taskId: string
	task: TaskType
	handleUpdateTask: (id: string, task: TaskType) => void
	handleDeleteTask: (id: string) => void
}

export function Task({
	taskId,
	task,
	handleUpdateTask,
	handleDeleteTask,
}: TaskProps) {
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

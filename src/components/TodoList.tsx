import { todoListMock } from '../mocks'
import { useState } from 'react'
import styles from './TodoList.module.css'

import { PlusCircle } from '@phosphor-icons/react'

type TodoListProps = {}

export function TodoList({}: TodoListProps) {
	const [todoList, setTodoList] = useState<TodoItemType[]>(todoListMock)

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
						<span>{todoList.length}</span>
					</label>

					<label className={styles.tasksCompleted}>
						Completed
						<span>{`${2} out of ${todoList.length}`}</span>
					</label>
				</header>

				{todoList.map((todoItem) => (
					<div key={todoItem.id}>{todoItem.content.toString()}</div>
				))}
			</div>
		</div>
	)
}

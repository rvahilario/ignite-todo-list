interface TodoItem {
	id: string
	isDone: boolean
	content: string
}

export const todoListMock: TodoItem[] = [
	{
		id: '1',
		isDone: false,
		content: 'Buy groceries',
	},
	{
		id: '2',
		isDone: true,
		content: 'Study for the math exam',
	},
	{
		id: '3',
		isDone: false,
		content: 'Send work emails',
	},
	{
		id: '4',
		isDone: true,
		content: "Schedule a doctor's appointment",
	},
	{
		id: '5',
		isDone: false,
		content: 'Exercise',
	},
]

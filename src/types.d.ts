interface TaskType {
	isCompleted: boolean
	content: string
}

type TodoObject = {
	[id: string]: TaskType
}

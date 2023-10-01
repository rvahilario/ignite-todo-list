interface TaskType {
	isCompleted: boolean
	content: string
}

type TaskObject = {
	[id: string]: TaskType
}

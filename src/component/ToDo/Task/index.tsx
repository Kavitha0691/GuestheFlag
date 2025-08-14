import { ToDoType } from "@/utils/todo-types"

interface ToDoTaskProps extends ToDoType {
    deleteTask: (id:string) => void
}


const Task = ({id, task, deleteTask}: ToDoTaskProps) => {
    const handleClick = () => {
        deleteTask(id)
    }
    return (
        <div data-testid="task-item"  className="flex border mb-4 p-4 rounded-2xl">
            <div className="flex-4/5">{task}</div>
            <button onClick={handleClick}>X</button>

        </div>
    )
}

export default Task
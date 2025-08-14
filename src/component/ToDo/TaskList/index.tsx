'use client'
import { useState } from "react"
import NewTask from "../NewTask"
import Task from "../Task"
import { defaultToDos } from "@/data/default-todos"
import { ToDoType } from "@/utils/todo-types"

const TaskList = () => {
    const [tasks, setTasks] = useState<ToDoType[]>(defaultToDos)

    const handleDelete = (taskId: string):void => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const handleAdd = (newTask:ToDoType) => {
        setTasks([...tasks, newTask])
    }
    return (
      <div className="p-4">
         {tasks && tasks.map(item => <Task key={item.id} {...item} deleteTask={() => handleDelete(item.id)} />)}
         <NewTask addTask={handleAdd}/>
      </div>
    )
}

export default TaskList
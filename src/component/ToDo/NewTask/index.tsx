'use client'
import { ToDoType } from "@/utils/todo-types"
import { useState } from "react"
import {v4 as uuid} from "uuid"

const NewTask = ({addTask}:{addTask: (newTask: ToDoType) => void}) => {
    const[inputValue, setInputValue] = useState<string>("")

    const handleClick = () => {
        const userTask = {id: uuid(), task: inputValue}
        addTask(userTask)
    }
    return (
        <div className="">
        <h2 className="text-center font-bold text-2xl w-full mb-4">Add a task!</h2>
        <fieldset>
            <label htmlFor="user-input">Add your Task:</label>
            <input id="user-input" value={inputValue} onChange={ (event) => setInputValue(event.target.value)} className="w-full" placeholder="plan your day..." />
        </fieldset>
        <button onClick={handleClick} className="rounded-2xl bg-gray-800 text-white text-center p-4">Add task!</button>

        </div>
    )
}

export default NewTask
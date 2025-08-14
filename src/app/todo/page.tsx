import Header from "@/component/ToDo/Header"
import TaskList from "@/component/ToDo/TaskList"
import {v4 as uuid} from 'uuid'


const ToDoPage = () => {

    return (
        <section className="my-12 max-w-3xl mx-auto bg-white rounded-2xl text-gray-700">
            <Header />
            <TaskList /> <p>{uuid()}</p>
       </section>
    )
}

export default ToDoPage
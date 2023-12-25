"use client"

import { useState } from "react"
import Header from "./components/Header"
import AddTAskRow from "./components/AddTaskRow"
import TaskList from "./components/TaskList"

const INITIAL_TASKS = [{ 
    id: Date.now(),
    text: "Learn Js",
    completed: false
},
{
    id: Date.now(),
    text: "Learn Reactjs",
    completed: false
}]


export default function Home() {
    const [tasks, setTasks] = useState(INITIAL_TASKS)


const addTask = (task: any) => {
    setTasks([...tasks, task])
} 



const removeTask = (id: number) => {
setTasks(tasks.filter(task => task.id !== id))
}

const toggleTask = (id: number) => {
setTasks(tasks.map(task => {
    if (task.id == id) {
        task.completed = !task.completed
    }
    return task
}))
}

    return (
    <main>
    <Header />
  <AddTAskRow addTask={addTask} />
    <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </main>)
}
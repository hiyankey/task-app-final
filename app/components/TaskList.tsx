import { CloseIcon } from "@iconicicons/react"


export default function TaskList({tasks, toggleTask, removeTask}: any) {
 
const emptyTasks = (<p>No task available</p>)
    return(  <>{!tasks?.length && emptyTasks}
        {tasks?.map((task: any )=> <li><input type="checkbox" checked={task.completed} onClick={() => toggleTask(task.id)} />{task.text} <button onClick={() => removeTask(task.id)}><CloseIcon /></button></li>)}</>)
}
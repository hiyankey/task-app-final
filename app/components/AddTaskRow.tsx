"use client"
import { useState } from "react"

export default function AddTAskRow({addTask}: any) {
    const [text, setText] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setText("")
        addTask({
            id: Date.now(),
            text: text,
            completed: false
        })
        }
    return(      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
        <button type="submit">Add task</button>
    </form>)
}
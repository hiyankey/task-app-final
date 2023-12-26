"use client"
import { useState } from "react"

export default function AddTAskRow({ addTask }: any) {
  const [text, setText] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setText("")
    addTask({
      id: Date.now(),
      text: text,
      completed: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-evenly">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="border p-2 rounded btn"
      />
      <button type="submit" className="border  p-2 translate-x-4 rounded btn text-black text-opacity-40 shadow-sm ">
        Add task
      </button>
    </form>
  )
}

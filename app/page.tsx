"use client"
import useLocalStorage from "./hooks/useLocalStorage"



export default function Home() {
    const [value, setValue] = useLocalStorage("role", "Design Engineer")
    return (
        <main>
            <h1>I'm a {value}</h1>
        </main>
    )
} 
import {  useEffect, useState} from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {

    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
    //    handle potential errors
try {
    const item = localStorage.getItem(key)
    setValue(item ? JSON.parse(item) : initialValue)
} catch (error) {
    setValue(initialValue)
}
    }, [key, initialValue])

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
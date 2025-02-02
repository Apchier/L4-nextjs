import { useState } from "react"

export const useCount = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
        if (count !== 0) {
            setCount((prev) => prev - 1)
        }
    }

    return (
        { count, handleIncrement, handleDecrement }
    )
}
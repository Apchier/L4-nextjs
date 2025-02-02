'use client'
import { Button } from "@/components/ui/button"
import { useCount } from "../hooks/useCount"
import { PageContainer } from "@/components/layouts/PageContainer"

export const CountPage = () => {
    const { count, handleIncrement, handleDecrement } = useCount()

    return (
        <PageContainer className="flex flex-col justify-center items-center gap-2">
            <h1>useState</h1>
            <p className="text-xl">{count}</p>

            <div className="flex gap-2">
                <Button onClick={handleIncrement}>+</Button>
                <Button onClick={handleDecrement}>-</Button>
            </div>
        </PageContainer>
    )
}
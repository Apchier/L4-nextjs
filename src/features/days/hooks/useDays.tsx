import { useState } from 'react';

export const useDays = () => {
    const [day, setDay] = useState<string>('')

    const handleButton = (day: string) => {
        setDay(day)
    }

    return (
        {
            day,
            handleButton
        }
    )
}
'use client'

import { PageContainer } from "@/components/layouts/PageContainer"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export const ProductPage = () => {
    const [click, setClick] = useState<boolean>(false)
    const [lick, setLick] = useState<boolean>(false)

    const handleKiri = () => {
        console.log("KIRI BOS")
        setClick((prev) => !prev)
    }

    const handleKanan = () => {
        console.log("KANAN BOS")
        setLick((prev) => !prev)
    }

    useEffect(function onanimos() {
        console.log("Render Pertama")
    }, [])

    useEffect(function () {
        console.log("ini Click")
    }, [click])

    useEffect(() => {
        console.log("ini Lick")
    }, [lick])

    return (
        <PageContainer>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div>
                    <h1 className="text-2xl">useEffect</h1>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <Button onClick={handleKiri}>Ke Kiri</Button>
                    <Button onClick={handleKanan}>Ke Kanan</Button>
                </div>
            </div>
        </PageContainer>
    )
}
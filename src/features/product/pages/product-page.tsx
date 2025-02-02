'use client'
import { PageContainer } from "@/components/layouts/PageContainer"
import { ProductView } from "../components/view/ProductView"

export const ProductPage = () => {

    return (
        <PageContainer className="flex flex-col gap-4 justify-center items-center">
            <h1>useEffect</h1>
            <ProductView/>
        </PageContainer>
    )
}
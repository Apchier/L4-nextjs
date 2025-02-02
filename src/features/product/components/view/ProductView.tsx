import { useProduct } from "../../api/useProduct"
import { Button } from "@/components/ui/button"
import { ProductCard } from "../ProductCard"


export const ProductView = () => {
    const { products, handleRevalidate } = useProduct()

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Button onClick={handleRevalidate}>Revalidate</Button>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    )
}
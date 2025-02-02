import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Product } from "../types/type";

type ProductCardProps = {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({
    ...props
}) => {
    return (
        <Card className="w-80 shadow-md rounded-2xl overflow-hidden border">
            <CardHeader className="p-0">
                <img
                    src={props.product.image}
                    alt={props.product.title}
                    className="w-full h-48 object-cover"
                />
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">
                    {props.product.title}
                </CardTitle>
                <Badge variant="outline" className="mb-2">
                    {props.product.category}
                </Badge>
                <p className="text-sm text-gray-600 mb-4">
                    {props.product.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                        ${props.product.price}
                    </span>
                    <Button variant="default">Buy Now</Button>
                </div>
            </CardContent>
        </Card>
    );
}


import { Product } from "../ProductData";
import Image from "next/image";

export default function ProductsList({Products}:{Products:Product[]}){
    return (
        <div>
        {Products.map(product=>(
            <div key={product.id} className="flex">
                <Image src={product.imageUrl} alt="Product image" width={150} height={150}></Image>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>

            </div>


        ))}
        </div>
    )
}
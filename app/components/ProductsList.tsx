import Link from "next/link";
import { Product } from "../ProductData";
import Image from "next/image";
import ProductDetails from "./Product";

export default function ProductsList({Products}:{Products:Product[]}){
    return (
        <div>
        {Products.map(product => (
            <div key={product.id}>
           <ProductDetails product={product} width={150} height={150} descr={false}/>
            </div>
        ))}
        </div>
    )
}
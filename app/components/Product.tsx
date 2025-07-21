import React from 'react'
import { Product } from '../ProductData'
import Link from 'next/link'
import Image from 'next/image'


const ProductDetails = ({ product, width, height }: { product: Product, width: number, height: number }) => {
    return (
        <>
            <Link key={product.id} href={`/products/${product.id}`}>
                <Image src={product.imageUrl} alt="Product image" width={width} height={height}></Image>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
            </Link>


        </>
    )
}

export default ProductDetails
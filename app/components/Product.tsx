import React from 'react'
import { Product } from '../ProductData'
import Link from 'next/link'
import Image from 'next/image'


const ProductDetails = ({ product, width, height, descr }: { product: Product, width: number, height: number, descr: boolean }) => {
    return (
        <>
           


                <Link key={product.id} href={`/products/${product.id}`} className='text-center'>
                   <div className={`w-${width} h-100px`}>
                    <Image className='w-full h-full ' src={product.imageUrl} alt="Product image" width={width} height={100}></Image></div>
                    <h2>{product.name}</h2>
                    <h2>${product.price}</h2>
                    {descr && (
                        <p className=''>{product.description}</p>
                    )}
                </Link>
           

        </>
    )
}

export default ProductDetails
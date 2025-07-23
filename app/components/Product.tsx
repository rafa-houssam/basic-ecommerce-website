'use client'
import  { useState } from 'react'
import { Product } from '../ProductData'
import Link from 'next/link'
import Image from 'next/image'


const ProductDetails = ({ product, width, height, initialCartState = [], descr }: { product: Product, width: number, height: number, descr: boolean, initialCartState?: Product[] }) => {
    const [cartProduct, setcartProducts] = useState(initialCartState)

    async function addTocart(productId: string) {
        const response = await fetch("http://localhost:3000/users/1/cart", {
            method: "POST",
            body:
                JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json' }


        })
        let newCart = await response.json()
        newCart = newCart.data
        setcartProducts(newCart)


    }

    return (
        <>
       <div>

       



            <Link key={product.id} href={`/products/${product.id}`} className='text-center  '>
                {descr && (
                    <Image className='ml-90 m-2 mt-4 ' src={product.imageUrl} alt="Product image" width={width} height={height}></Image>)}
                {!descr && (<div className={`w-${width} h-100px`}>
                    <Image className='w-full h-full m-2  ' src={product.imageUrl} alt="Product image" width={width} height={100}></Image></div>)}
                <h2>{product.name}</h2>
                <h2>${product.price}</h2>
                {/* <h1 className='text-bold text-2xl'>Description</h1> */}
                {descr && (
                    <>
                        <p className=''>{product.description}</p></>
                )}
            </Link>
                <button className='bg-blue-400 hover:cursor-pointer' onClick={() => addTocart(product.id)}>add to cart</button>
            </div>


        </>
    )
}

export default ProductDetails
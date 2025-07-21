import React from 'react'
import { products } from '@/app/ProductData'
import ProductDetails from '@/app/components/Product'



const ProductPage = ({params}:{params:{id:string}}) => {
    const product=products.find(p=>p.id==params.id)

  return (
    <>
    
    <div>ProductDetails </div>
    {product && (
     <ProductDetails product={product} height={250} width={250}/>
    )}
</>

  )
}

export default ProductPage
import React from 'react'
import { products } from '@/app/ProductData'
import ProductDetails from '@/app/components/Product'



const ProductPage = ({params}:{params:{id:string}}) => {
    const product=products.find(p=>p.id==params.id)

  return (
    <>
    
    <div className='text-center text-gray-700 mb-5 font-bold '>ProductDetails </div>
    {product && (
        <div className=' font-serif text-center w-250 ml-auto mr-auto bg-gray-300'>
     <ProductDetails product={product} height={250} width={250} descr={true}/>
     </div>
    )}
</>

  )
}

export default ProductPage
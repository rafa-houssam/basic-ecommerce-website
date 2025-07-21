'use client'
import  { useState } from 'react'
import { products } from '../ProductData'
import ProductsList from '../components/ProductsList'

const Cart = () => {
    const [cartIds,setcartIds]=useState(['123','234'])
    const carProduct=cartIds.map(id=>products.find(p=>id==p.id)!)
  return (
    <>
    <div>shopping cart</div>
      <ProductsList Products={carProduct}/>

    </>
  )
}


export default Cart
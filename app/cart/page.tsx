'use client'
import  { useEffect, useState } from 'react'
import { products } from '../ProductData'
import ProductsList from '../components/ProductsList'

 async function Cart(){
    const [cartIds,setcartIds]=useState(['123','234'])
    const carProduct=cartIds.map(id=>products.find(p=>id==p.id)!)
    const response=await fetch("/api/hello")
    const data=response.json()
    console.log(data)
  return (
    <>
    <div>shopping cart</div>
      <ProductsList Products={carProduct}/>

    </>
  )
}


export default Cart
import React from 'react'
import ProductsList from '../components/ProductsList'
import { products } from '../ProductData'


const Products = () => {
  return (
    <>
    <div>Products</div>
    <ProductsList Products={products}/>
    </>
    
  )
}

export default Products
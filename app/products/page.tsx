import React from 'react'
import ProductsList from '../components/ProductsList'
import { products } from '../ProductData'


const Products = () => {
    return (
        <>
         
                <ProductsList Products={products} />
            

        </>

    )
}

export default Products
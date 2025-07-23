import React from 'react'
import ProductsList from '../components/ProductsList'


const Products = async () => {
    const response=await fetch('http://localhost:3000/routes/products')
    const products= await response.json()
    console.log(products)


    return (
        <>
         
                <ProductsList Products={products.products} />
            

        </>

    )
}

export default Products
import React from 'react'
import ProductsList from '../components/ProductsList'


const Products = async () => {
    const response=await fetch('http://localhost:3000/routes/products')
    const products= await response.json()
    const response2=await fetch('http://localhost:3000/routes/users/1/cart')
    const carts=await response2.json()



    return (
        <>
         
                <ProductsList Products={products.products} initialCartState={carts.data}  />
            

        </>

    )
}

export default Products
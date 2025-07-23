
import { cache } from 'react'
import ProductsList from '../components/ProductsList'
import ShoppingCart from './ShoppingCart'

 async function Cart(){
     const response=await fetch('http://localhost:3000/routes/users/1/cart',{cache:'no-cache'})
     const cartProducts=await response.json()
  return (
    <>
      <ShoppingCart initialState={cartProducts.data} page='cart'/>

    </>
  )
}


export default Cart

import ProductsList from '../components/ProductsList'
import ShoppingCart from './ShoppingCart'

 async function Cart(){
     const response=await fetch('http://localhost:3000/routes/users/1/cart')
     const cartProducts=await response.json()
  return (
    <>
      <ShoppingCart initialState={cartProducts.data}/>

    </>
  )
}


export default Cart
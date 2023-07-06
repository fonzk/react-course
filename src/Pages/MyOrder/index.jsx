import { Link } from 'react-router-dom'
import {  useContext } from 'react'
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from '../../Context'

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  
  let index= currentPath.split("/")[2]
  if (index==="last")    index=context.order.length-1




  return (
    <>
    <div className='flex w-80 justify-center items-center'>
   <Link  to={`/my-orders`}>
    <ChevronLeftIcon className=' cursor-pointer h-6 w-6 '/>
    </Link>
      <h1 className='font-medium text-xl'>MyOrder</h1>

   </div>
      <div className='px-6 pt-3'>

{

context.order?.[index]?.products.map(product => {
    return(
    <OrderCard 
    key= {product.id}
    id={product.id}
    title={product.title}
    imageUrl = {product.images}
    price = {product.price}
  

    />)
})
}  
</div>
    </>
  )
}

export default MyOrder

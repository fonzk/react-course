import {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from "../../Components/OrdersCard"


function MyOrders() {
  const context = useContext(ShoppingCartContext)
 
  return (
    <>
   <div className='flex w-80 justify-center items-center'>
      <h1 className='font-medium text-xl'>MyOrders</h1>

   </div>
 
{

context.order.map((order, index)=>(
<Link key={index} to={`/my-orders/${order.id}`}>

<OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} id={order.id} />
</Link>
)  )

}

  
     
    </>
  )
}

export default MyOrders

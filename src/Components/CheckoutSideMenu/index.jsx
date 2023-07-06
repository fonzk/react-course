import {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = ()=>{
    const context = useContext(ShoppingCartContext)
   
    
   

     const handleDelete = (id)=> {
      const filteredProducts=  context.cartProducts.filter(product=> product.id !== id,[])
          context.setCartProducts(filteredProducts)
       
          if (filteredProducts.length===0){
            context.closeCheckoutSideMenu()

          }
        
    
    }
    const handleCheckout = ()=> {
        const orderToAdd={
            id:context.order?.length,
            date: '22-06-23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
       context.setCartProducts([])
       context.setSearchByTitle(null)
       context.closeCheckoutSideMenu()
      }
    return (
        <aside className={ `${context.isCheckoutSideMenuOpen ? 'flex' :'hidden'} CheckoutSideMenu flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>

<div className="flex justify-between item-center m-6 ">
<h2 className="font-medium text-xl">My Order</h2>
<div className="cursor-pointer" onClick={()=>context.closeCheckoutSideMenu()}> < XMarkIcon className="h-6 w-6 text-black-500"/></div>

</div>
<div className='px-6 overflow-y-scroll  flex-1 pt-3'>

{

context.cartProducts?.map(product => {
    return(
    <OrderCard 
    key= {product.id}
    id={product.id}
    title={product.title}
    imageUrl = {product.images}
    price = {product.price}
    handleDelete={handleDelete}

    />)
})
}  
</div>
<div className='px-6 mb-6'>
    <p className='flex justify-between items-center'>

        <span className=' font-light'>Total</span>
        <span className=' font-medium text-2xl'>${ totalPrice(context.cartProducts)}</span>
    </p>
    <Link to='/my-orders/last'>
<button className="w-full bg-black rounded-md  text-white h-10 bottom-0"   onClick={()=> handleCheckout()} >Checkout</button>
</Link>
</div>


        </aside>
 



    )
}
export default CheckoutSideMenu
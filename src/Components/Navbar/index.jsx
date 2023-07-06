import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingCartIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
  const context =useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
const openshopp=()=>{ if (context.cartProducts.length>0) {
  context.openCheckoutSideMenu()
}

}
  return (
    <nav className='flex justify-between items-cente bg-white top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={()=>context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={()=>context.setSearchByCategory("clothes")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={()=>context.setSearchByCategory("electronics")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={()=>context.setSearchByCategory("furnitures")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={()=>context.setSearchByCategory("toys")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={()=>context.setSearchByCategory("others")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
  alfdiazr
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex flex-row'> 
        <ShoppingCartIcon onClick={()=> openshopp()} className=' cursor-pointer h-4 w-4 '/> {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

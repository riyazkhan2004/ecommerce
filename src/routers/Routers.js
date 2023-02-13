import {Routes, Route,Navigate} from 'react-router-dom'
import { Home } from '../pages/home/home';
import { Shop } from '../pages/shop/shop';
import { Cart } from '../pages/cart/cart';
import { Checkout } from '../pages/checkout/checkout';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Productdesc } from '../pages/productdesc/productdesc';


export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home'/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='shop/:id' element={<Productdesc/>}/>
    </Routes>
    
  )
}

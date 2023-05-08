import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Ring from '../Pages/products pages/Ring'
import SingleProduct from '../Pages/products pages/SingleProduct'
import Cart from '../Pages/Cartpage/Cart'
import Payment from '../Pages/Payment/Payment'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp' 
import AdminMain from '../Pages/Admin/AdminMain'
import RingsMange from '../Pages/Admin/RingsMange'
import EaringManage from '../Pages/Admin/EaringManage'
import Order from '../Pages/Admin/Order'
import UserPage from '../Pages/Admin/UserPage'

import { useSelector } from 'react-redux'

import EarRings from '../Pages/products pages/EarRings'
import SingleProducteEar from '../Pages/products pages/SingleProductEar'
import CheckoutPage from '../Pages/CheckOutPage/CheckoutPage'


const AllRoutes = () => {
  return (
    <Box mt={"140px"}>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/rings' element={<Ring/>}></Route>
            <Route path='/earings' element={<EarRings/>}></Route>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}></Route>
            <Route path='/singalproductear/:id' element={<SingleProducteEar/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/checkout' element={<PrivateRoutes><Payment/></PrivateRoutes>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/payment' element={<PrivateRoutes><CheckoutPage/></PrivateRoutes>}></Route>   
           
            <Route path='/admin' element={<PrivateRoutes><AdminMain/></PrivateRoutes>}></Route>
            <Route path='/admin/managerings' element={<PrivateRoutes><RingsMange/></PrivateRoutes>}></Route>
            <Route path='/admin/manageearrings' element={<PrivateRoutes><EaringManage/></PrivateRoutes>}></Route>
            <Route path='/admin/order' element={<PrivateRoutes><Order/></PrivateRoutes>}></Route>
            <Route path='/admin/users' element={<PrivateRoutes><UserPage/></PrivateRoutes>}></Route>
      </Routes>
    </Box>
  )
}

const PrivateRoutes = ({children}) => {
  const {isAuth} = useSelector((state) => state.authReducer)
  return isAuth ? children : <Navigate to={"/login"}/>
}
export default AllRoutes

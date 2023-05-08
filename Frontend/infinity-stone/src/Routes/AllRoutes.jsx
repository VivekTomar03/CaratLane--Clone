import React from 'react'
import {Route,Routes} from "react-router-dom"
import Ring from '../Pages/products pages/Ring'
import Home from './Home'
import SingleProduct from '../Pages/products pages/SingleProduct'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path='/ring' element={<Ring/>}/>
    <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
    <Route path='/' element={<Home/>}/>
</Routes>

    </div>
  )
}

export default AllRoutes
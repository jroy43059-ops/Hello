import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Admin/AdminDashboard'

import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Login from '../Pages/RegisterAndLogin/Login'
import Register from '../Pages/RegisterAndLogin/Register'
import UserProfile from '../Pages/UserProfile/UserProfile'
import Men from '../Pages/Men/Men'
import Women from '../Pages/Women/Women'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'
import Search from '../Pages/Search/Search'
import Cart from '../Pages/Cart/Cart'
import PrivateRouteForAdmin from './PrivateRouteForAdmin'
import NotAutherished from '../Pages/NotAutherishied/NotAutherished'
import PrivateRouteForAuth from './PrivateRouteForAuth'
import Checkout from '../Pages/Checkout/Checkout'
import Blog from '../Pages/Blog/Blog'



export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/admindashboard' element={
                <PrivateRouteForAdmin>
                    <AdminDashboard />
                </PrivateRouteForAdmin>
            } ></Route>
            <Route path='/userprofile' element={
                <PrivateRouteForAuth>
                    <UserProfile />
                </PrivateRouteForAuth>
            } ></Route>
            <Route path='/men' element={<Men />} ></Route>
            <Route path='/women' element={<Women />} ></Route>
            <Route path='/singleproduct/:id' element={<SingleProduct />} ></Route>
            <Route path='/search' element={<Search />} ></Route>
            <Route path='/products' element={<Products />} ></Route>
            <Route path='/cart' element={
                <PrivateRouteForAuth>
                    <Cart />
                </PrivateRouteForAuth>
            } ></Route>
            <Route path='/checkout' element={<Checkout />} ></Route>
            <Route path='/blog' element={<Blog />} ></Route>
            <Route path='*' element={<NotAutherished />} ></Route>
        </Routes>
    )
}

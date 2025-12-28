import React, { useContext, useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import { useNavigate } from 'react-router-dom'

import maleUserLogo from "../Assets/maleUserLogo.webp"
import manyavarFullLogo from "../Assets/manyavarFullLogo.webp"

import AddProduct from './AddProduct'
import Inventory from './Inventory'
import Users from './Users'
import Dashboard from './Dashboard'

import { MdOutlineDashboard, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { RiAdminLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { HiOutlineUsers } from 'react-icons/hi'
import Admins from './Admins'
import Cart from './Cart'
import Wishlist from './Wishlist'

import Cookies from 'js-cookie';
import Checkout from './Checkout'
import { AdminDashboardContext } from '../Context/AdminDashboardContext'

export default function AdminDashboard() {

  const user = JSON.parse(localStorage.getItem('Manyavaruser'))

  const { dashBoard, setDashBoard, addProduct, setAddProduct, inventory, setInventory,
    users, setUsers, admins, setAdmins, cart, setCart, wishlist, setWishlist,
    checkout, setCheckout } = useContext(AdminDashboardContext)

  const navigate = useNavigate()

  const logoutAdmin = () => {
    Cookies.remove("isAuth");
    Cookies.remove("token");
    Cookies.remove("role");
    navigate('/login')
  }

  return (
    <div className={styles.AdminDashboardContainer} >
      <div className={styles.ADMenueContainer}  >
        <img onClick={() => navigate('/')} src={manyavarFullLogo} alt="" />
        <div>
          <div>
            <img style={{ borderRadius: '50%' }} src={user.avatar || maleUserLogo} alt="" />
          </div>
          <div>
            <h4><b>{user.firstname + ' ' + user.lastname}</b></h4>
            <h4>{user.email}</h4>
            <h4 className={styles.logoutBtn} onClick={logoutAdmin}>Log out</h4>
          </div>
        </div>
        <div>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(true)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
            setCheckout(false)
          }}
            className={dashBoard && styles.activeonAdmin}
          ><p>Dashboard</p><span><MdOutlineDashboard /></span> </button>
          <button onClick={() => {
            setAddProduct(true)
            setDashBoard(false)
            setInventory(false)
            setAdmins(false)
            setUsers(false)
            setCart(false)
            setWishlist(false)
            setCheckout(false)
          }}
            className={addProduct && styles.activeonAdmin}
          ><p>Add Product</p><span><MdOutlineDashboardCustomize /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(true)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
            setCheckout(false)
          }}
            className={inventory && styles.activeonAdmin}
          ><p>Inventory</p><span><FaList /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(true)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
            setCheckout(false)
          }}
            className={users && styles.activeonAdmin}
          ><p>Users</p><span><HiOutlineUsers /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(true)
            setCart(false)
            setWishlist(false)
            setCheckout(false)
          }}
            className={admins && styles.activeonAdmin}
          ><p>Admins</p><span><RiAdminLine /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(true)
            setWishlist(false)
            setCheckout(false)
          }}
            className={cart && styles.activeonAdmin}
          ><p>Cart</p><span><AiOutlineShoppingCart /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(true)
            setCheckout(false)
          }}
            className={wishlist && styles.activeonAdmin}
          ><p>Wishlist</p><span><AiOutlineHeart /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
            setCheckout(true)
          }}
            className={checkout && styles.activeonAdmin}
          ><p>Checkout</p><span><AiOutlineHeart /></span> </button>
        </div>
      </div>
      <div>
        {
          dashBoard ? <Dashboard /> :
            addProduct ? <AddProduct /> :
              inventory ? <Inventory /> :
                users ? <Users /> :
                  admins ? <Admins /> :
                    cart ? <Cart /> :
                      wishlist ? <Wishlist /> :
                        checkout ? <Checkout /> :
                          <div></div>
        }
      </div>
    </div>
  )
}

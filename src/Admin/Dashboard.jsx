import React, { useContext, useEffect, useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"
import { CChart } from '@coreui/react-chartjs'

import mehelLogo from "../Assets/mehelLogo.webp"
import { getProducts, getUser, getAdmin, getCart, getWishlist, getCheckout } from '../Redux/admin/action'

import { RiAdminLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { BsListCheck } from "react-icons/bs"
import { MdShoppingCartCheckout } from 'react-icons/md'
import { HiOutlineUsers } from 'react-icons/hi'

import { useDispatch, useSelector } from 'react-redux'
import { LoggerContext } from '../Context/LoggerContex'
import { AdminDashboardContext } from '../Context/AdminDashboardContext'

export default function Dashboard() {
    const { token } = useContext(LoggerContext)

    const [revenue, setRevenue] = useState(0)

    const { setDashBoard, setAddProduct, setInventory,
        setUsers, setAdmins, setCart, setWishlist,
        checkout, setCheckout } = useContext(AdminDashboardContext)

    const adminList = useSelector((store) => store.adminManager)

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts(dispatch)
        getUser(dispatch)
        getAdmin(dispatch)
        getCart(dispatch, token)
        getWishlist(dispatch, token)
        getCheckout(dispatch, token)
        allTotal(adminList.checkoutList)
    }, [])


    const allTotal = (arr) => {
        setTimeout(() => {
            const totalAmount = arr.reduce((accumulator, item) => {
                return accumulator + item.price * item.quantity
            }, 0)
            setRevenue(totalAmount)
        }, 3000);
    }


    return (
        <div className={styles.DashboardContainer} >
            <img style={{ marginTop: '20px' }} src={mehelLogo} alt="" />
            <div className={styles.DashboardContainerFirstDiv} >
                <div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(false)
                        setUsers(true)
                        setAdmins(false)
                        setCart(false)
                        setWishlist(false)
                        setCheckout(false)
                    }}  >
                        <h2>Users <HiOutlineUsers /></h2>
                        <p>{adminList.usersList.length}</p>
                    </div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(false)
                        setUsers(false)
                        setAdmins(true)
                        setCart(false)
                        setWishlist(false)
                        setCheckout(false)
                    }}  >
                        <h2>Admin<RiAdminLine /></h2>
                        <p>{adminList.adminList.length}</p>
                    </div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(true)
                        setUsers(false)
                        setAdmins(false)
                        setCart(false)
                        setWishlist(false)
                        setCheckout(false)
                    }} >
                        <h2>Produts<BsListCheck /></h2>
                        <p>{adminList.productsList.length}</p>
                    </div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(false)
                        setUsers(false)
                        setAdmins(false)
                        setCart(true)
                        setWishlist(false)
                        setCheckout(false)
                    }}   >
                        <h2>Cart<AiOutlineShoppingCart /></h2>
                        <p>{adminList.cartList.length}</p>
                    </div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(false)
                        setUsers(false)
                        setAdmins(false)
                        setCart(false)
                        setWishlist(true)
                        setCheckout(false)
                    }}   >
                        <h2>Wishlist<AiOutlineHeart /></h2>
                        <p>{adminList.wishList.length}</p>
                    </div>
                    <div onClick={() => {
                        setAddProduct(false)
                        setDashBoard(false)
                        setInventory(false)
                        setUsers(false)
                        setAdmins(false)
                        setCart(false)
                        setWishlist(false)
                        setCheckout(true)
                    }}   >
                        <h2>Checkout<MdShoppingCartCheckout /></h2>
                        <p>{adminList.checkoutList.length}</p>
                    </div>
                    <div>
                        Total Revenue
                    </div>
                    <div>
                        ₹ {revenue}.00
                    </div>
                </div>
                <div>
                    <CChart className={styles.chart}
                        type="polarArea"
                        data={{
                            labels: ['Users', 'Admin', 'Product', 'Cart', 'Wishlist', 'Checkout'],
                            datasets: [
                                {
                                    data: [adminList.usersList.length, adminList.adminList.length, adminList.productsList.length, adminList.cartList.length, adminList.wishList.length, adminList.checkoutList.length],
                                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB', 'pink'],
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

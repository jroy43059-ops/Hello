import React, { createContext, useState } from 'react'

export const AdminDashboardContext = createContext()

export default function AdminDashboardContextProvider({ children }) {
    const [dashBoard, setDashBoard] = useState(true)
    const [addProduct, setAddProduct] = useState(false)
    const [inventory, setInventory] = useState(false)
    const [users, setUsers] = useState(false)
    const [admins, setAdmins] = useState(false)
    const [cart, setCart] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [checkout, setCheckout] = useState(false)

    return (
        <AdminDashboardContext.Provider
            value={{
                dashBoard, setDashBoard, addProduct, setAddProduct, inventory, setInventory,
                users, setUsers, admins, setAdmins, cart, setCart, wishlist, setWishlist, checkout, setCheckout
            }}
        >{children}</AdminDashboardContext.Provider>
    )
}

import React, { createContext, useState } from 'react'

export const ProfileContex = createContext()

export default function ProfileContexProvider({ children }) {

    const [profile, setProfile] = useState(true)
    const [address, setAddress] = useState(false)
    const [order, setOrder] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [password, setPassword] = useState(false)

    return (
        <ProfileContex.Provider value={{
            profile, setProfile,
            address, setAddress,
            order, setOrder,
            wishlist, setWishlist,
            password, setPassword,
        }} >{children}</ProfileContex.Provider>
    )
}

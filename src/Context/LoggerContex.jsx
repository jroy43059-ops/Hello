import React, { createContext, useState } from 'react'
import Cookies from 'js-cookie';

export const LoggerContext = createContext()

export default function LoggerContexProvider({ children }) {
    const tokenFromCookies = Cookies.get('token')
    const roleFromCookies = Cookies.get('role')
    const isAuthFromCookies = Cookies.get('isAuth')

    const [token, setToken] = useState(tokenFromCookies)
    const [role, setRole] = useState(roleFromCookies)
    const [isAuth, setIsAuth] = useState(isAuthFromCookies)

    return (
        <LoggerContext.Provider value={{ token, setToken, role, setRole, isAuth, setIsAuth }} >{children}</LoggerContext.Provider>
    )
}

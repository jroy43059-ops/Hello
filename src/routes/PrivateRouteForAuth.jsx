import React, { useContext } from 'react'
import { LoggerContext } from '../Context/LoggerContex'
import { Navigate } from 'react-router-dom'

export default function PrivateRouteForAuth({ children }) {
    const { isAuth } = useContext(LoggerContext)

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    return children
}

import React, { useContext } from 'react'
import { LoggerContext } from '../Context/LoggerContex'
import { Navigate } from 'react-router-dom'

export default function PrivateRouteForAdmin({ children }) {
    const { role } = useContext(LoggerContext)

    if (role !== 'admin') {
        return <Navigate to='*' />
    }

    return children

}

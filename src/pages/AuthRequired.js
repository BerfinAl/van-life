import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {

    const location = useLocation()

    const auth = { token: null }
    
    if (!auth.token) {
        return <Navigate to="/login" state={{message: "You must log in first!", from: location.pathname}} replace />
    }
    return <Outlet />
}
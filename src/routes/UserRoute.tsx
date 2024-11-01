import React from 'react'
import HeaderOne from '../components/header/HeaderOne'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'

export default function UserRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element={<UserLayout/>}>
                
            </Route>
        </Routes>
    </>
  )
}

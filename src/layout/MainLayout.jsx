import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </>
  )
}

export default MainLayout
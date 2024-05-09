// import React from 'react'
import Logo from "../assets/android-chrome-192x192.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full h-20 flex items-center fixed z-20 justify-center bg-black">
      <Link to="/">
        <img className="w-20" src={Logo} alt="" />
        </Link>
    </div>
  )
}

export default Navbar
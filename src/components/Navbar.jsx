// import React from 'react'
import Logo from "../assets/android-chrome-192x192.png"

function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-center bg-black">
        <img className="w-16" src={Logo} alt="" />
    </div>
  )
}

export default Navbar
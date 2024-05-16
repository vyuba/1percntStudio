// import React from 'react'
import Logo from "../assets/android-chrome-192x192.png"
function Footer() {
  return (
    <div className="w-full bg-black py-[70px] flex justify-between items-start flex-col px-7 md:flex-row">
        <img className="w-16" src={Logo} alt="" />
        <p className="text-white text-sm">© 2022 1% STUDIO <br />
            ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
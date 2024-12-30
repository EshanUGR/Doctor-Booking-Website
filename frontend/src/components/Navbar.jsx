import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const[showMenu,setShowMenu]=useState(false);
  const[token,setToken]=useState(true);
  return (
    <div className="flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400">
      <img src={assets.logo} alt="logo" className="cursor-pointer w-44" />
      <ul className="hidden gap-5 font-medium md:flex item-start">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctor">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block">
              <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("my-appointments")}
                >
                  My Appoinments
                </p>
                <p className="cursor-pointer hover:text-black" onClick={()=>setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="hidden px-8 py-3 font-light text-white rounded-full bg-primary md:block "
            onClick={() => navigate("/login")}
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar

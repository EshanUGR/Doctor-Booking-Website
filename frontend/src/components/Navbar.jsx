import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const[showMenu,setShowMenu]=useState(false);
  const[token,setToken]=useState(true);
  return (
    <div className="flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400">
      <img
        src={assets.logo}
        alt="logo"
        className="cursor-pointer w-44"
        onClick={"/"}
      />
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
            <img
              onClick={() => navigate("/")}
              src={assets.profile_pic}
              alt=""
              className="w-8 rounded-full"
            />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block">
              <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("my-appointments")}
                >
                  My Appoinments
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
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

        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt="menu-image"
          className="w-6 md:hidden "
        />

        {/* mobile menue */}
        <div
          className={`
        ${showMenu ? "fixed w-full" : "h-0 w-0"}
        md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all flex flex-col`}
        >
          <div className="flex items-center justify-between px-5 py-5 ">
            <img src={assets.logo} alt="" className="w-36 " />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="w-7"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
           
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctor"
             
            >
              <p> All Doctors</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
             
            >
              <p> About</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
             
            >
              <p>Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar

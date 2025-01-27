import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {

  const[aToken,setAToken]=useContext(AdminContext);
const navigate=useNavigate();
  const logout=()=>{
    navigate('/');
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }
  
  return (
    <div>
      <div className='flex items-center gap-2 text-xs'>
        <img src={assets.admin_logo} alt="" className='cursor-pointer w-36 sm:w-40' />
        <p className='px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? "Admin" : "Doctor"}</p>
      </div>
      <button 
      onClick={logout}
      className='px-10 py-2 text-sm text-white rounded-full bg-primary '>Logout</button>
    </div>
  );
}

export default Navbar

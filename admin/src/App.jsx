import { useContext, useState } from 'react'
import Login from './pages/Login'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {AppContext} from './context/AppContext.jsx'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar.jsx'
function App() {

  const {aToken}=useContext(AdminContext);
 
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />

      <Navbar />
    </div>
  ) : (
    <>
   
      <Login />
      <ToastContainer />
    </>
  );
}

export default App

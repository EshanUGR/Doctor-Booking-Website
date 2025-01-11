import React, { useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from '../context/AppContext'
console.log(AppContext)
const Doctor = () => {
  const {speciality}=useParams()
  
  const[filterDoc,setFilterDoc]=useState([])
  const[showFilter,setShowFilter]=useState(false)
const{doctors}=useContext(AppContext);
const navigate=useNavigate();
const applyFilter=()=>
{
  if(speciality)
  {
    setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
  }
  else{
    setFilterDoc(doctors);
  }
}

useEffect(()=>
{
  applyFilter();
},[doctors,speciality])

  return (
    <div>
      <p className="text-gray-600">Brwose through the doctor speciality</p>
      <div className="flex flex-col items-start gap-5 mt-5 sm:flex-row">

<button 
className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?'bg-primary text-white':''}`}
onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter?'flex':'hidden sm:flex'}`}>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctor")
                : navigate("/doctor/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctor")
                : navigate("/doctor/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctor")
                : navigate("/doctor/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctor")
                : navigate("/doctor/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        <div className="grid w-full grid-cols-auto gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500 "
              key={index}
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor

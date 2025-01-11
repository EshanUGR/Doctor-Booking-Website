import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctor = () => {

  const {doctors}=useContext(AppContext)
  const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500 "
            key={index}
          >
            <img src={item.image} alt="" className="bg-blue-50" />
            <div classNam="p-4">
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
      <button
        className="px-12 mt-10 text-gray-600 rounded-full bg-blue-50 py-4-3"
        onClick={() => {
          navigate("/doctor");
          scrollTo(0, 0);
        }}
      >
        more
      </button>
    </div>
  );
}

export default TopDoctor
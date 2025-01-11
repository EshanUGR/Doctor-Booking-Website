import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center py-16 text-gray-800 gpa-4"
    >
      <h1 className="text-3xl font-medium ">Find by Speciality</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors/
      </p>

      <div className="flex w-full gap-4 pt-5 overflow-scroll sm:justify-center ">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)}
            to={`/doctor/${item.speciality}`}
            key={index}
            className="flex flex-col items-center flex-shrink-0 text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            
          >
            <img
              src={item.image}
              alt={`${item.speciality} image`}
              className="w-16 mb-2 sm:w-24"
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu

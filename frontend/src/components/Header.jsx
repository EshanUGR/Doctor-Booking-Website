import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col flex-wrap px-6 rounded-lg md:flex-row bg-primary md:px-10 lg:px-20'>


      <div className='flex flex-col items-start justify-center gap-4 py-10 m-auto md:w-1/2 md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight '>
          Book Appointment <br />
          With Trusted
        </p>

        <div className='flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row'>
          <img src={assets.group_profiles} alt="" className='w-28' />
          <p>
            Simply browse through our extensive list of tursted doctors.
            <br className='hidden sm:block ' />
            schedule your appointment{" "}
          </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition duration-300 bg-white rounded-full md:m-0 hover:scale-105-all'>
          Book appointment
          <img src={assets.arrow_icon} alt="" className='w-3' />
        </a>
      </div>
{/* right side */}
      <div className='relative md:w-1/2'>
<img src={assets.header_img} alt=""  className='bottom-0 w-full h-auto rounded-lg md:absolute'/>



      </div>
    </div>
  );
}

export default Header

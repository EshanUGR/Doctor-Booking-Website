import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {

  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        <p>
          CONTACT <span className="font-serif text-gray-700">US</span>
        </p>
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28">
        <img
          src={assets.contact_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-lg font-semibold text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Cum, nisi!
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, <br /> elit. Sequi?
          </p>
          <p className="text-lg font-semibold text-gray-600">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet .</p>
          <button className='px-8 py-4 text-sm transition duration-500 border border-black hover:bg-black hover:text-white'>Explore Job</button>
        </div>
      </div>
    </div>
  );
}

export default Contact

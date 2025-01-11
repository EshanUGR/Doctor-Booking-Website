import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img src={assets.logo} alt="" className="w-40 mb-5" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            beatae eos, voluptas molestias perferendis nemo.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+74 767399304</li>
            <li>ravinduesh@gmail.com</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        {/* copy right messsage */}
        <hr />
        <p className='py-5 text-sm text-center'>All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer

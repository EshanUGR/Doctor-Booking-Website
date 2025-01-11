import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        <p className="font-semibold text-gray-700">
          About <span>Us</span>
        </p>
      </div>

      <div className="flex flex-col gap-12 my-10 md:flex-row ">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w=[360px]"
        />
        <div className="flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quos quas? Quia laudantium eos culpa?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel est
            fugiat repellendus harum nemo.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            assumenda!
          </p>
        </div>
      </div>

      <div className="my-4 text-xl">
        <p>
          Why <span className="font-semibold text-gray-700">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col mb-20 md:flex-row">
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          {/* first */}
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            debitis vel hic ipsum illo repudiandae!
          </p>
        </div>
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio
            molestiae eos ex esse!
          </p>
        </div>
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel porro
            consectetur inventore similique!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

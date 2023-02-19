import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../accest/Img/logo.png"

import {
  RiHome3Line,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiWhatsappFill,
  RiShieldUserLine,
  RiBook2Line,
  RiLightbulbFlashLine,
} from "react-icons/ri";

function colorItem(){
  const theme={
    color:"white",
    background:"#4364c0",
  }
  return theme;
}

export const Navbar = () => {
  return (
    <div className="bg-white w-60 fixed left-0 top-16 justify-center  h-full p-5 flex-col drop-shadow-xl   z-50 ">
      <div className="mt-7 flex flex-col gap-5 uppercase  items-center   ">
        <img className="w-28" src={Logo} alt="Logo" />
      </div>

      <div>
        <nav className=" mt-7 flex flex-wrap justify-center p-2 ">
          <ul className=" flex flex-col   w-full gap-2 ">
            <li className="  justify-center font-bold ">
              <NavLink
                to="/"
                className="flex items-center gap-3 text-gray-800 p-4 border-l rounded-lg border-blue-900 hover:text-2xl hover:bg-[#4364c0] hover:text-white  transition-all"
              >
                <RiHome3Line className="text-2xl font-bold" />
                <h2>Home</h2>
              </NavLink>
              <div className="mt-4 w-full h-1 bg-gray-400"></div>
            </li>
            <li className="  justify-center font-bold">
              <NavLink
                to="/about"
                className="flex items-center gap-3 text-gray-800  p-4 border-l rounded-lg border-blue-900 hover:text-2xl hover:bg-[#4364c0] hover:text-white  transition-all"
                
              >
                <RiShieldUserLine className="text-2xl font-bold" />
                <h2>About</h2>
              </NavLink>
              <div className="mt-4 w-full h-1 bg-gray-400"></div>
            </li>
            <li className="  justify-center font-bold">
              <NavLink
                to="portafolio"
                className="flex items-center gap-3 text-gray-800  p-4 border-l rounded-lg border-blue-900 hover:text-2xl hover:bg-[#4364c0] hover:text-white  transition-all"
              >
                <RiBook2Line className="text-2xl font-bold" />
                <h2>Portafolio</h2>
              </NavLink>
              <div className="mt-4 w-full h-1 bg-gray-400"></div>
            </li>
            <li className="  justify-center font-bold">
              <NavLink
                href="#"
                className="flex  items-center gap-3 text-gray-800  p-4 border-l rounded-lg border-blue-900 hover:text-2xl hover:bg-[#4364c0] hover:text-white  transition-all"
              >
                <RiLightbulbFlashLine className="text-2xl font-bold" />
                <h2>Skilss</h2>
              </NavLink>
              <div className="mt-4 w-full h-1 bg-gray-400"></div>
            </li>
          </ul>
        </nav>

        <div className="bg-gray-200 mt-8 px-4 py-4 flex justify-center transition-all gap-5 text-5xl rounded-2xl">
          <RiLinkedinBoxFill className="text-blue-900 hover:w-20 transition-all" />
          <RiGithubFill className="hover:w-20 transition-all" />
          <RiWhatsappFill className="text-green-600 hover:w-20 transition-all" />
        </div>
      </div>
    </div>
  );
};

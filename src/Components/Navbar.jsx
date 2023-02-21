import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../accest/Img/logo.png";
import { BasicModal } from "./BasicModal";

import {
  RiHome3Line,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiWhatsappFill,
  RiShieldUserLine,
  RiBook2Line,
} from "react-icons/ri";

export const Navbar = (props) => {
  useEffect(() => {
    setMenu(props.onMenu);
  }, [props.onMenu]);

  const [menu, setMenu] = useState();

  return (
    <div>
      <div
        id="ContenedorMenu"
        className={`bg-white lg:w-60  fixed lg:left-0   top-16 justify-center  h-full p-5 flex-col drop-shadow-xl z-20  lg:visible overflow-scroll transition-all ${
          menu ? "left-0" : "-left-64 "
        } 	 `}
      >
        <div className="mt-2 flex flex-col gap-5 uppercase  items-center  ">
          <img className="w-28" src={Logo} alt="Logo" />
        </div>

        <div>
          <nav className=" mt-7 flex flex-wrap justify-center p-2 ">
            <ul className=" flex flex-col   w-full gap-2 ">
              <li className="  justify-center font-bold ">
                <NavLink
                  to="/"
                  className="flex items-center gap-3 text-gray-800 p-4 border-l rounded-lg border-blue-900 hover:text-2xl hover:bg-[#4364c0] hover:text-white  transition-all"
                  onClick={() => {
                    setMenu(false);
                  }}
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
                  onClick={() => {
                    setMenu(false);
                  }}
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
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <RiBook2Line className="text-2xl font-bold" />
                  <h2>Portafolio</h2>
                </NavLink>
                <div className="mt-4 w-full h-1 bg-gray-400"></div>
              </li>
              <li className="  justify-center font-bold">
                <NavLink
                  href="#"
                  className="flex  items-center gap-3 text-gray-800  p-4 border-l rounded-lg border-blue-900 hover:text-xl hover:bg-[#4364c0] hover:text-white  transition-all"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <BasicModal />
                </NavLink>
                <div className="mt-4 w-full h-1 bg-gray-400"></div>
              </li>
            </ul>
          </nav>

          <div className="bg-gray-200 mt-8 px-4 py-4 flex justify-center transition-all gap-5 text-5xl mb-32 rounded-2xl">
            <Link
              to="https://www.linkedin.com/in/santiago-orjuela-sierra/"
              target="_blank"
            >
              <RiLinkedinBoxFill className="text-blue-900 hover:w-16 transition-all" />
            </Link>
            <Link
              to="https://github.com/Santiago825?tab=repositories"
              target="_blank"
            >
              <RiGithubFill className="hover:w-16 transition-all" />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=573016337950"
              target="_blank"
            >
              <RiWhatsappFill className="text-green-600 hover:w-16 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

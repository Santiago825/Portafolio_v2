import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiBriefcase2Line, RiLightbulbFlashLine } from "react-icons/ri";
import { PortafolioRouter } from "./router/PortafolioRouter";

export const Portafolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="">
        <div className="flex pl-16 flex-wrap w-full  text-start   py-10  mt-10 gap-6">
          <h1 className="text-5xl font-bold">Portafolio</h1>
        </div>

        <div className=" flex justify-center px-4 lg:px-0  ">
          <nav className="shadow-xl bg-blue-50 w-96 justify-center px-3 py-3 rounded-xl">
            <ul className="flex gap-3 justify-center">
              <li>
                <Link to="contentPortafolio" className=" bg-slate-100 md:w-40  flex gap-5 justify-center items-center text-lg font-bold py-3 px-3 rounded-lg shadow-xl hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all text-black">
                  <RiBriefcase2Line />
                  <h2> Portafolio</h2>
                </Link>
              </li>
              <li>
                <Link to="skills" className=" bg-slate-100 md:w-40 w-32 flex gap-5 justify-center items-center text-lg font-bold py-3 px-3 rounded-lg shadow-xl hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all text-black">
                  <RiLightbulbFlashLine />
                  <h2> Skills</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" mt-5 w-full pb-16 ">
          <PortafolioRouter />
        </div>
      </div>
    </motion.div>
  );
};

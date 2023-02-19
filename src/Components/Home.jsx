import React from "react";
import PhotoPer from "../accest/Img/Photo_perfil.png";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className=" h-full    "
      >
        <div className="">
          <div className=" w-full grid grid-cols-2  h-full  ">
            <div className="pl-14 text-start font-bold  flex flex-col gap-3 justify-center ">
              <h1 className="text-9xl font-extrabold">HI</h1>
              <p className="text-2xl font-serif">
                I’m Engineering system Santiago orjuela
              </p>
              <p className="text-xl ">
                Front-End Developer emphasized in web environments with diverse
                in Back-End
              </p>
              <div className="flex justify-start gap-4 text-[#434752] mt-5">
                <button className="bg-[#D9D9D9] p-3 rounded-lg hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all">
                  Dowlanded Cv
                </button>
                <button className="bg-[#D9D9D9] p-3 rounded-lg hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all">
                  Contactame{" "}
                </button>
              </div>
              <div className="mt-14 h-1 w-full bg-white"></div>
            </div>
            <div className=" flex justify-center items-end     ">
              <img className="" src={PhotoPer} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

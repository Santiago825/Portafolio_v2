import React from "react";
import PhotoPer from "../accest/Img/Photo_perfil.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BasicModal } from "./BasicModal";

export const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
       
      >

        <div style={{height:"92vh"}} className="w-full ">
          <div className="relative lg:relative w-full grid lg:grid-cols-2  h-full bg-blue  ">
            <div className="lg:pl-14 text-start font-bold px-5 lg:p-0  flex flex-col gap-3 justify-center z-10  ">
              <h1 className="text-9xl font-extrabold">HI</h1>
              <p className="text-2xl font-serif">
                I’m Engineering system Santiago orjuela
              </p>
              <p className="text-xl ">
                Front-End Developer emphasized in web environments with diverse
                in Back-End
              </p>
              <div className="flex justify-start gap-4 text-[#434752] mt-5">
                <Link
                  to="https://drive.google.com/file/d/17b9L9Niq7JwN7DE-mRwkqhVq0_02kT1b/view?usp=share_link"
                  target="_blank"
                  className="bg-[#D9D9D9] p-3 rounded-lg hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all"
                >
                  Dowlanded Cv
                </Link>
                <Link className="bg-[#D9D9D9] p-3 rounded-lg hover:bg-[#4364c0] hover:text-[#D9D9D9] transition-all">
                  <BasicModal />
                </Link>
              </div>
              <div className="mt-14 h-1 w-full bg-white"></div>
            </div>
            <div className="absolute lg:relative flex justify-center align-middle  w-full opacity-20 lg:opacity-100   ">
              <img className="select-none" src={PhotoPer} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import React from "react";
import PhotoPer from "../accest/Img/Photo_perfil.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BasicModal } from "./BasicModal";
import emailjs from "@emailjs/browser";
import { Typography, Modal, TextField, FormControl } from "@mui/material";
import Box from "@mui/material/Box";

export const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className=" h-full    "
      >

        <div style={{height:"92vh"}} className="">
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
            <div className=" flex justify-center align-middle     ">
              <img className="select-none" src={PhotoPer} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { AboutRouter } from "./router/AboutRouter";


export const About = () => {
  return (
    <div>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <div className="pl-16">
          <div className="flex flex-wrap w-full  text-start   py-10  mt-10 gap-6 ">
            <h1 className="text-5xl font-bold">About me</h1>
            <p className="pr-28">
              Systems engineering student last semester of the Autonomous
              University of Colombia, Extensive knowledge, domain in the
              analysis, and development of web environments. I characterize
              myself as a person who relates well in a team and contributes as
              much as possible my abilities, I also stand out for being a
              responsible person and efficient, I am permanently involved in the
              construction of set goals and objectives.
            </p>
          </div>

          <div className="  w-full flex mt-2 pr-14 flex-wrap ">
            <nav className="bg-white w-full drop-shadow-lg text-black  py-3 rounded-xl  ">
              <ul className="flex justify-around">
                <li>
                  <Link to="education">
                    <h2>Education</h2>
                  </Link>
                </li>
                <li>
                  <NavLink to="complementary">
                    <h2>Complementary education</h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="certification">
                    <h2>Certification</h2>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className=" mt-5 w-full">
              <AboutRouter />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

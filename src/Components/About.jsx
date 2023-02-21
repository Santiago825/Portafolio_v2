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
        <div className="lg:pl-16 px-5">
          {/* Title and description */}
          <div className="flex flex-wrap w-full  text-start   py-10  mt-10 gap-6 ">
            <h1 className="text-5xl font-bold  ">About me</h1>
            <p className="lg:pr-28 px-3 text-justify  ">
              Systems engineering student last semester of the Autonomous
              University of Colombia, Extensive knowledge, domain in the
              analysis, and development of web environments. I characterize
              myself as a person who relates well in a team and contributes as
              much as possible my abilities, I also stand out for being a
              responsible person and efficient, I am permanently involved in the
              construction of set goals and objectives.
            </p>
          </div>
          {/* menu  */}
          <div className="w-full flex mt-2 lg:pr-14 flex-wrap justify-center   ">
            <nav className="bg-white w-full   lg:shadow-lg text-black  py-3 rounded-xl  ">
              <ul className="flex justify-around flex-col md:flex-row gap-4 ">
                <li>
                  <Link to="education">
                    <div className="p-2 shadow-md rounded-xl ">
                      <h2>Education</h2>
                    </div>
                  </Link>
                </li>
                <li>
                  <NavLink to="certification">
                    <div className="p-2 shadow-md rounded-xl">
                      <h2>Certification</h2>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="complementary">
                    <div className="p-2 shadow-md rounded-xl">
                      <h2>Complementary education</h2>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className=" mt-5 w-full mb-5">
              <AboutRouter />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

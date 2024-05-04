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
        <div className="lg:pl-16 px-5  ">
          {/* Title and description */}
          <div className="flex flex-wrap w-full  text-start   py-10  mt-10 gap-6 ">
            <h1 className="text-5xl font-bold  ">About me</h1>
            <p className="lg:pr-28 px-3 text-justify  ">
            FullStack WEB developer specialized in the frontend, with 1 year of experience in analysis, design, software development using technologies such as angular, javascript, java, sql, Boostrap among others, at the same time I stand out for my analytical capacity, responsibility and efficiency. I am passionate about learning new things and I value the support of people with extensive knowledge to enrich mine. I am always committed to building new objectives and achieving established goals. I enjoy actively participating in the planning, organization and development of specific projects to continually improve the organization.
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
                  <Link to="experience">
                    <div className="p-2 shadow-md rounded-xl ">
                      <h2>Experience</h2>
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
            <div className=" mt-5 w-full mb-20">
              <AboutRouter />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

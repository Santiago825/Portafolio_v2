import React from "react";
import { RiLinkM } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Complementary = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-9 mb-10">
      {/* Card 5 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2 bg-slate-200 rounded-lg p-2  ">
          <h1 className="font-bold text-justify">
            Certificate in fundamentals in Scrum by SCRUMstudy
          </h1>

          <span className="">2022, Bogotá</span>
        </div>
        <div className="col-span-2  flex mt-5 ">
          <Link
            to="https://www.scrumstudy.com/certification/verify?type=SFC&number=963317"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>
      {/* Card 4 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2 bg-slate-200 rounded-lg p-2  ">
          <h1 className="font-bold text-justify">
            Diploma in programming skills with an emphasis on Web Development
            Misión TIC
          </h1>

          <span className="">2022, Bogotá</span>
        </div>
        <div className="col-span-2  flex mt-5 ">
          <Link
            to="https://certificadomisionticutp.com/apiv1/public/docs/4A/_1012453280-.pdf"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>
      {/* Card 3 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2  ">
          <h1 className="font-bold text-justify bg-slate-200 rounded-lg p-2">
            Diploma in Fundamentals of Programming in JAVA Mision Tic
          </h1>

          <span className="">2022, Bogotá</span>
        </div>
        <div className="col-span-2  flex   mt-5 ">
          <Link
            to="https://certificadomisionticutp.com/apiv1/public/docs/2/_1012453280-.pdf"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>
      {/* Card 6 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2 bg-slate-200 rounded-lg p-2 ">
          <h1 className="font-bold text-justify">
            Diploma in Fundamentals of Python Programming General training
            program in programming skills
          </h1>

          <span className="">2022, Bogotá</span>
        </div>
        <div className="col-span-2  flex mt-5 ">
          <Link
            to="https://certificadomisionticutp.com/apiv1/public/docs/1/_1012453280-.pdf"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>

      {/* Card 1 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start shadow-xl border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2 bg-slate-200 p-2 rounded-lg  ">
          <h1 className="font-bold text-justify">
            Seedbed institution meeting certificate Second place mobile
            application for physical/mental recovery
          </h1>

          <span className="">2019, Bogotá</span>
        </div>
        <div className="col-span-1  flex mt-5 ">
          <Link
            to="https://drive.google.com/file/d/1MQz1D5DFpTX0wo7tIBZRJmFXTn0KW8sP/view?usp=share_link"
            target="_blank"
            className="bg-gray-500 text-white  p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>
      {/* Card 2 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-1 text-start flex flex-wrap gap-2 bg-slate-200 rounded-lg p-2">
          <h1 className="font-bold text-justify">
            Article published in the magazine of the engineering faculty
            Ingenium called Mobile application for physical/mental recovery
          </h1>

          <span className="">2019, Bogotá</span>
        </div>
        <div className="col-span-2  flex mt-5 ">
          <Link
            to="http://revistas.usbbog.edu.co/index.php/Ingenium/article/view/4943"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>

      
      {/* Card 7 */}
      <div className=" px-4  py-4 bg-blue-50 text-black items-start border border-xl rounded-lg h-50">
        <div className="col-span-2 text-start flex flex-wrap gap-2 bg-slate-200 rounded-lg p-2">
          <h1 className="font-bold text-justify">
            Certificate participated in the poster exhibition held at the 6th
            international engineering congress
          </h1>

          <span className="">2019, Bogotá</span>
        </div>
        <div className="col-span-2  flex mt-5 ">
          <Link
            to="https://drive.google.com/file/d/1dG_NnIep5UmANYjyOkrOxY_WmPsv99Gd/view?usp=share_link"
            target="_blank"
            className="bg-gray-500 text-white p-3 rounded-xl text-xl"
          >
            <RiLinkM />
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import port1 from "../../accest/Img/Img_portafolio/portsV2_1.png";
import Dashboard from "../../accest/Img/Img_portafolio/Dashboard.png";
import pokedex from "../../accest/Img/Img_portafolio/Login-pokedex.png";
import Kimi from "../../accest/Img/Img_portafolio/Inicio-Kimi.png";
import portV1 from "../../accest/Img/Img_portafolio/port_v1.png";
import villa from "../../accest/Img/Img_portafolio/Villa.png";



import { RiLinkM , RiGithubFill} from "react-icons/ri";

export const PortafolioContent = () => {
  return (
    <div className="grid grid-cols-3 gap-8  mx-16 p-4 mb-5 ">
      {/* card 1 */}
      <div className=" h-52 rounded-xl relative shadow-2xl  ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={port1}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
            personal page
            </span>
            <h2 className="mb-4">HTML, React, Css, Tailwind,React Router</h2>
            <div className="flex gap-3">
              <Link to="https://portafolio-v2-zeta.vercel.app/" target="_blank"  className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/Portafolio_v2" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className=" h-52 rounded-xl relative shadow-2xl ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={Kimi}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
              Kimi Decoraciones {" "}
            </span>
            <h2 className="mb-4">HTML, React, Css, Bootstrap,React Router</h2>
            <div className="flex gap-3">
              <Link to="https://kimi-decoraciones.vercel.app/" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/Kimi_Decoraciones" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className=" h-52 rounded-xl relative shadow-2xl ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={Dashboard}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
            Dashboard of a restaurant
            </span>
            <h2 className="mb-4">Html, React, TailWind</h2>
            <div className="flex gap-3">
              <Link to="https://dash-boar-restaurante.vercel.app/" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/DashBoar_Restaurante" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className=" h-52 rounded-xl relative shadow-2xl ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={villa}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
              CRUD ApiRest producto VillaPlast{" "}
            </span>
            <h2 className="mb-4">Html, Css, JavaScript,React, Bootstrap</h2>
            <div className="flex gap-3">
              <Link to="https://villplast-fromt-crud.vercel.app/" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/Villplast_Fromt_Crud" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* card 5 */}
      <div className=" h-52 rounded-xl relative shadow-2xl ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={pokedex}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
              Pokedex with Login{" "}
            </span>
            <h2 className="mb-4">PhP, Html, Css, JavaScript, Bootstrap</h2>
            <div className="flex gap-3">
              <Link to="https://github.com/Santiago825/Pokedex" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/Pokedex" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div className=" h-52 rounded-xl relative shadow-2xl ">
        <div className=" w-full h-full  bg-cover bg-center ">
          <img
            className=" h-full bg-cover  bg-center rounded-xl"
            src={portV1}
            alt=""
          />
        </div>
        <div className="bg-black absolute rounded-xl top-0 w-full h-full  z-50 transition-all opacity-0 hover:opacity-70  flex flex-col justify-end">
          <div className="text-white p-3 text-start ">
            <span className="text-xl uppercase font-bold">
              Personal Page Version 1
            </span>
            <h2 className="mb-4">Html, JavaScript, Css, BootsTrap </h2>
            <div className="flex gap-3">
              <Link to="https://santiagoorjuela.netlify.app/" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </Link>
              <Link to="https://github.com/Santiago825/PortafolioSO.github.io" target="_blank" className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

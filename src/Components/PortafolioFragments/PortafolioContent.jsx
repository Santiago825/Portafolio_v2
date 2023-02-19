import React from "react";
import { Link } from "react-router-dom";
import port1 from "../../accest/Img/Img_portafolio/portsV2_1.png";
import Dashboard from "../../accest/Img/Img_portafolio/Dashboard.png";
import pokedex from "../../accest/Img/Img_portafolio/Login-pokedex.png";
import Kimi from "../../accest/Img/Img_portafolio/Inicio-Kimi.png";
import portV1 from "../../accest/Img/Img_portafolio/port_v1.png";



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
              Pagina personal{" "}
            </span>
            <h2 className="mb-4">Descritpcion</h2>
            <div className="flex gap-3">
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </button>
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </button>
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
              Pagina personal{" "}
            </span>
            <h2 className="mb-4">Descritpcion</h2>
            <div className="flex gap-3">
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </button>
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </button>
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
              Pagina personal{" "}
            </span>
            <h2 className="mb-4">Descritpcion</h2>
            <div className="flex gap-3">
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </button>
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card 4 */}
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
              Pagina personal{" "}
            </span>
            <h2 className="mb-4">Descritpcion</h2>
            <div className="flex gap-3">
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </button>
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card 5 */}
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
              Pagina personal{" "}
            </span>
            <h2 className="mb-4">Descritpcion</h2>
            <div className="flex gap-3">
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiLinkM />
              </button>
              <button className=" text-black bg-gray-300 rounded-xl text-3xl p-1  ">
                <RiGithubFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

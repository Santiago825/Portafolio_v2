import React from "react";
import Autonoma from "../../accest/Img/autonoma_logo.png";
import Colombo from "../../accest/Img/colombo.png";
import Mision from "../../accest/Img/mision.png";

export const Education = () => {
  return (
    //Contenedor cards
    <div className=" grid grid-cols-3 gap-3">
      {/* Card 1 */}
      <div className="grid grid-cols-4 py-4 bg-white text-black items-center border border-xl rounded-lg h-50">
        <div className="col-span-1 flex items-center px-3   ">
          <img src={Autonoma} className="w-28" alt="imgen uni autonoma" />
        </div>
        <div className="col-span-3 text-start ">
          <h1 className="font-bold">Systems Engineer</h1>
          <h2>Autonomous University of Colombia</h2>
          <span>2022, Bogotá</span>
        </div>
      </div>
      {/* Card 2 */}
      <div className="grid grid-cols-4 py-4 bg-white text-black items-center border border-xl rounded-lg h-50">
        <div className="col-span-1 flex items-center px-3   ">
          <img src={Mision} className="w-28" alt="imgen uni autonoma" />
        </div>
        <div className="col-span-3 text-start ">
          <h1 className="font-bold">Graduated of the Misión Tic 2022 program</h1>
          <h2>Technological University of Pereira </h2>
          <span>2022, Bogotá</span>
        </div>
      </div>
      {/* Card 3 */}
      <div className="grid grid-cols-4 py-4 bg-white text-black items-center border border-xl rounded-lg h-50">
        <div className="col-span-1 flex items-center px-3   ">
          <img src={Colombo} className="w-28" alt="imgen uni autonoma" />
        </div>
        <div className="col-span-3 text-start ">
          <h1 className="font-bold">Graduated with an emphasis on Systems</h1>
          <h2>Colombo Latino School</h2>
          <span>2015 – Soacha</span>
        </div>
      </div>
    </div>
  );
};

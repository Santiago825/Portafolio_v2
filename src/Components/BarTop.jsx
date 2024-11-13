import React, { useEffect, useState } from "react";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { RiMenuLine } from "react-icons/ri";
import { colors } from "@mui/material";

export const BarTop = (props) => {
  const [menuMovil, setMenuMovil] = useState(true);

  function handleMenu() {
    
    setMenuMovil(!menuMovil);
    return props.handleMenu(menuMovil);
  }

  return (
    <div className="fixed w-full h-16 border px-7  z-50 select-none">
      <div className="flex flex-wrap font-bold  h-full items-center  justify-between   lg:text-2xl">
        <div
          onClick={handleMenu}
          className="lg:hidden w-10 h-10 flex justify-center items-center text-2xl rounded-lg shadow-lg"
        >
          <RiMenuLine />
        </div>

        <h2 className=" lg:text-3xl  hidden lg:flex">JS</h2>
        <h2 className="text-2xl font-serif">Web Developer</h2>
        <MaterialUISwitch onClick={props.Mode} />
      </div>
    </div>
  );
};

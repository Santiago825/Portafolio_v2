import React from "react";
import { SideBarSkills } from "./SideBarSkills";

export const SkillsContent = () => {
  return (
    <div className="px-20">
      <div className="flex flex-wrap mb-8  gap-2">
        <h1 className="text-xl font-bold" >Hard Skills</h1>
        <div className="bg-black w-full h-1"></div>
      </div>
      <div className="pr-32">
        <SideBarSkills />
      </div>
    </div>

    // <div className=''>
    //   <div className='flex flex-wrap px-20 gap-2'>
    //     <h1 className='text-xl font-bold'>Hard Skills</h1>
    //     <div className='bg-black w-full h-1'></div>

    //   </div>
    // </div>
  );
};

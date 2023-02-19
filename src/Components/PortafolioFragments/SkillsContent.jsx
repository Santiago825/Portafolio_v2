import React from "react";
import { SideBarSkills } from "./SideBarSkills";
import { skills } from "../../data/Skills";

export const SkillsContent = () => {
  const hardSkill = skills[0].hardSkill;
  const otherSkill = skills[1].otherSkills;
  console.log(otherSkill)

  return (
    <div className="px-20 flex flex-col gap-5">
      <div>
        <div className="flex flex-wrap mb-8  gap-2">
          <h1 className="text-xl font-bold">Hard Skills</h1>
          <div className="bg-black w-full h-1"></div>
        </div>
        <div className="pr-32 flex flex-wrap">
          <SideBarSkills data={hardSkill} />
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap mb-8  gap-2">
          <h1 className="text-xl font-bold">Hard Skills</h1>
          <div className="bg-black w-full h-1"></div>
        </div>
        <div className="pr-32 flex flex-wrap">
          <SideBarSkills data={hardSkill} />
        </div>
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

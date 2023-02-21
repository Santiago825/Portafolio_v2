import React from "react";
import { SideBarSkills } from "./SideBarSkills";
import { skills } from "../../data/Skills";

export const SkillsContent = () => {
  const hardSkill = skills[0].hardSkill;
  const otherSkill = skills[1].otherSkills;
  console.log(otherSkill);

  return (
    <div className="md:px-20 px-5  flex flex-col gap-5 mt-4">
      <div>
        <div className="flex flex-wrap mb-8  gap-2">
          <h1 className="text-xl font-bold">Hard Skills</h1>
          <div className="bg-black w-full h-1"></div>
        </div>

        {/* slide 1 */}
        <div className=" flex flex-wrap">
          <SideBarSkills data={hardSkill} />
        </div>
        {/* slide 2 */}
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap mb-8  gap-2">
          <h1 className="text-xl font-bold">Other Skills</h1>
          <div className="bg-black w-full h-1"></div>
        </div>
        <div className=" flex flex-wrap">
          <SideBarSkills data={otherSkill} />
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

import React from "react";
import Autonoma from "../../accest/Img/autonoma_logo.png";
import itc from "../../accest/Img/itc.jpg";

export const Experience = () => {
  return (
    //Contenedor cards
    <div className=" grid md:grid-cols-1  gap-3 ">
      {/* Card 1 */}
      <div className="grid grid-cols-12 py-4 bg-red text-black items-center border border-xl rounded-lg h-50">
        <div className="col-span-2 flex items-center px-3   ">
          <img src={itc} className="w-28" alt="imgen uni autonoma" />
        </div>
        <div className="col-span-9 text-start grid gap-2">
          <h1 className="font-bold">Full stack Web <h5>2023/Apr- 2024/Jan</h5></h1>
          <h3 className="text-justify">1) Develop functionalities for different modules related to fiduciary issues, both in the FrontEnd with Angular and the backend with tools such as Springboot, Maven and at the same time management and creation of tables with SQL, using the ApiRest architecture style.</h3>
          <h3 className="text-justify">2) Actively contribute to the creation and configuration of the first frontend components in Angular </h3>
          <h3 className="text-justify">3) Handling of errors identified by the QA area, 100% of the errors in the setter, products and allies modules were solved in their first version (minimum viable product)</h3>
          <h3 className="text-justify">4) Part of my role involved maintaining fluid and constant communication with the consultants. This close interaction guaranteed effective coordination in the implementation and improvement of functionalities.</h3>
          <span></span>
        </div>
      </div>

    </div>
  );
};

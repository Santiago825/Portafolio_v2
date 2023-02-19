import React from 'react'
import { Routes, Route } from "react-router-dom";
import { PortafolioContent } from '../PortafolioFragments/PortafolioContent';
import { SkillsContent } from '../PortafolioFragments/SkillsContent';




export const PortafolioRouter = () => {
 
  return (

    <div>
      <Routes >
        <Route exact path="/contentPortafolio" element={<PortafolioContent />}></Route>
        <Route exact path="/" element={<PortafolioContent />}></Route>
        <Route exact path="/skills" element={<SkillsContent />}></Route>
      </Routes>
    </div>
  );

}
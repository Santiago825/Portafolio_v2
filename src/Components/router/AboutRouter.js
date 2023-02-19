import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { Education } from '../AboutRouters/Education';
import { Complementary } from '../AboutRouters/Complementary';
import { Certification } from '../AboutRouters/Certification';




export const AboutRouter = () => {
 
  return (

    <div>
      <Routes >
        <Route exact path="/" element={<Education />}></Route>
        <Route exact path="/education" element={<Education />}></Route>
        <Route exact path="/complementary" element={<Complementary />}></Route>

        <Route exact path="/certification" element={<Certification />}></Route>

        
      </Routes>
    </div>
  );

}
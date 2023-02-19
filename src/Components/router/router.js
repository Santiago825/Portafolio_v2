import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from '../Home';
import { About } from '../About';
import { Portafolio } from '../Portafolio';


export const AppRouter = () => {
  const location=useLocation();
  return (

    <div>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about/*" element={<About />}></Route>
        <Route exact path="/portafolio/*" element={<Portafolio />}></Route>
      </Routes>
    </div>
  );

}

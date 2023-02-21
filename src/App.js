import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { AppRouter } from './Components/router/router';
import { BarTop } from './Components/BarTop';


import { useState } from 'react';

function App() {

  const [darkMode,setDarkMode]=useState(false)
  const ligthTheme={
    color:"#434752",
    background:"white",
    transition: "opacity 5s",
    height:"100vh"
    
  }
  const darkTheme={
    color:"white",
    background:"#434752",
    transition: "opacity 5s",
    height:"100vh"  
  }
  function modeTheme(){
    if(!darkMode){
      return ligthTheme
    }else{
      return darkTheme
    }
  }
  function onModeTheme(){
    darkMode?setDarkMode(false):setDarkMode(true)
 
  }

  return (
    
    <div className="App top-0  bg-red-600">
        <BarTop style={modeTheme()} Mode={onModeTheme} />

      <div >
        <Router>
          <Navbar className="border " />
          <div style={modeTheme()} className="  lg:pl-60 pt-16   w-full h-full     ">
            <AppRouter className="" />
          </div>
        </Router>
      </div>


    </div>
  );
}

export default App;

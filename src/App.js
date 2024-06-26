import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { AppRouter } from './Components/router/router';
import { BarTop } from './Components/BarTop';


import { useState } from 'react';

function App() {

  const [darkMode,setDarkMode]=useState(false)
  const [menu,setMenu]=useState(false);
  
  const ligthTheme={
    color:"#434752",
    background:"white",
    transition: "opacity 5s"
    
  }
  const darkTheme={
    color:"white",
    background:"#434752",
    transition: "opacity 5s"
    
      
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
  function handleMenu(menu){
    setMenu(menu)
    
  }
  

 

  return (
    
    <div className="App top-0 ">
        <BarTop style={modeTheme()} Mode={onModeTheme}  handleMenu={handleMenu}  />

      <div >
        <Router>
          <Navbar className="border" onMenu={menu} />
          <div style={modeTheme()} className="  lg:pl-60 pt-16   w-full  ">
            <AppRouter className="" />
          </div>
        </Router>
      </div>


    </div>
  );
}

export default App;

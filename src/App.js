import React, { useState } from "react";
//import { api } from "./components/api";
import Mcq from "./components/mcq";
import { api } from "./components/question";
import Topic from "./components/topic";
import Home from "./components/home";
function App() {



  return(
   <>




      <div className="background-shapes">
        <div className="shape circle" style={{top: "10%", left: "5%"}}></div>
        <div className="shape square" style={{top: "20%", right: "10%"}}></div>
        <div className="shape triangle" style={{bottom: "15%", left: "15%"}}></div>
        <div className="shape star" style={{bottom: "10%", right: "20%"}}></div>
        <div className="shape circle" style={{top: "70%", left: "80%"}}></div>
      </div>
   <Home/>
   </>
  ) 
}

export default App;

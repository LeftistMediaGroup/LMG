import "./App.css";
import "chart.js/auto";
import { Component } from "react";

import { Routes, Route } from "react-router-dom";
import { allContext } from "./contexts.js";

import Home from "./basic/Home.js";
import Education from "./basic/Education.js";
import Volunteering from "./basic/volunteering/Volunteering.js";
import Dashboard from "./dashboard/Dashboard.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/volunteering" element={<Volunteering></Volunteering>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/" element={<Home></Home>} />/
      </Routes>
    </div>
  );
}

export default App;

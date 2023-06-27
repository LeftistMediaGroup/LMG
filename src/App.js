import "./App.css";
import "chart.js/auto";

import { Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import Home from "./basic/Home.js";
import Education from "./basic/Education.js";
import Volunteering from "./basic/volunteering/Volunteering.js";
import Dashboard from "./dashboard/Dashboard.js";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar>
          <Menu>
            <MenuItem component={<Link to="/" />}> Home</MenuItem>
            <MenuItem component={<Link to="/education" />}> Education</MenuItem>
            <MenuItem component={<Link to="/volunteering" />}>
              {" "}
              Volunteering
            </MenuItem>
            <MenuItem component={<Link to="/dashboard" />}> Dashboard</MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <Routes>
        <Route path="/education" element={<Education />}></Route>
        <Route
          path="/volunteering"
          element={<Volunteering></Volunteering>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/" element={<Home></Home>} />/
      </Routes>
    </div>
  );
}

export default App;

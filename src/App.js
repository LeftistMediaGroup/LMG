import "./App.css";
import "chart.js/auto";

import { Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import Home from "./basic/Home.js";
import Education from "./basic/Education.js";
import Volunteering from "./basic/volunteering/Volunteering.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="sidebar">
          <Sidebar>
            <Menu>
              <MenuItem component={<Link to="/" />}> Home</MenuItem>
              <MenuItem component={<Link to="/education" />}>
                {" "}
                Education
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>

        <div class="container">
          <Routes>
            <Route path="/education" element={<Education />}></Route>
            <Route
              path="/volunteering"
              element={<Volunteering></Volunteering>}
            ></Route>
            <Route exact path="/" element={<Home></Home>} />/
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

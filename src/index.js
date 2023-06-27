import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Drawer, Menu, MenuItem } from "@mui/material";

import { Routes, Route, Link } from "react-router-dom";
import Volunteering from "./basic/volunteering/Volunteering";
import Education from "./basic/Education";
import Dashboard from "./dashboard/Dashboard";
import Home from "./basic/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "black",
    },
    secondary: {
      main: "#a30002",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Drawer
        sx={{
          width: "auto",
          flexShrink: 1,
          "& .MuiDrawer-paper": {
            width: "12%",
            boxSizing: "border-box",
            padding: "6px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <br />
        <br />
        <Menu>
          <MenuItem component={<Link to="/" />}> Home</MenuItem>
          <MenuItem component={<Link to="/education" />}> Education</MenuItem>
          <MenuItem component={<Link to="/volunteering" />}>
            {" "}
            Volunteering
          </MenuItem>
          <MenuItem component={<Link to="/dashboard" />}> Dashboard</MenuItem>
        </Menu>
      </Drawer>
      <Routes>
        <Route path="/education" element={<Education />}></Route>
        <Route
          path="/volunteering"
          element={<Volunteering></Volunteering>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/" element={<Home></Home>} />/
      </Routes>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

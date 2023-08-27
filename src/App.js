import "./App.css";
import "chart.js/auto";

import { Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import Home from "./basic/Home.js";
import Education from "./basic/Education.js";
import Volunteering from "./basic/volunteering/Volunteering.js";
import Account from "./basic/account/Account.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUpForm from "./basic/SignUpForm";
import { red } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: red,
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderColor: "red",
          borderRadius: 2,
          position: "relative",
          zIndex: 0,
        },
      },
    },
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
              <div className="sidebar-btn-wrapper">
                <MenuItem
                  rootStyles={{
                    marginLeft: 15,
                    marginRight: 105,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: "silver",
                    borderRadius: 10,
                  }}
                  component={<Link to="/" />}
                >
                  {" "}
                  Home
                </MenuItem>
              </div>

              <div className="sidebar-btn-wrapper">
                <MenuItem
                  rootStyles={{
                    marginLeft: 15,
                    marginRight: 105,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: "silver",
                    borderRadius: 10,
                  }}
                  component={<Link to="/education" />}
                >
                  {" "}
                  Education
                </MenuItem>
              </div>

              <div className="sidebar-btn-wrapper">
                <MenuItem
                  rootStyles={{
                    marginLeft: 15,
                    marginRight: 105,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: "silver",
                    borderRadius: 10,
                  }}
                  component={<Link to="/signup" />}
                >
                  {" "}
                  Sign up
                </MenuItem>
              </div>

              <div className="sidebar-btn-wrapper">
                <MenuItem
                  rootStyles={{
                    marginLeft: 15,
                    marginRight: 105,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: "silver",
                    borderRadius: 10,
                  }}
                  component={<Link to="/account" />}
                >
                  {" "}
                  Account
                </MenuItem>
              </div>
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
            <Route exact path="/" element={<Home></Home>} />
            <Route exact path="/signup" element={<SignUpForm></SignUpForm>} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
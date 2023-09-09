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
import SignUpForm from "./basic/home/SignUpForm.js";
import { red } from "@mui/material/colors";

import { BrowserView, MobileView } from "react-device-detect";
import { loginContext } from "./contexts.js";

import Register_Admin from "./basic/account/Register_admin";
import Login from "./basic/account/Login";

let state = { is_loggedin: "Not initalized", username: "Not initalized" };

function setIs_loggedin(is_loggedin) {
  state.is_loggedin = is_loggedin;
}

function setUsername(username) {
  state.username = username;
  console.log(`Username: ${username}`);
}

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

function renderAccount() {
  if (state.is_loggedin === true) {
    return (
      <div className="sidebar-btn-wrapper">
        <MenuItem
          rootStyles={{
            marginLeft: 5,
            marginRight: 5,
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
    );
  } else {
    return (
      <>
        <div className="sidebar-btn-wrapper">
          <MenuItem
            rootStyles={{
              marginLeft: 5,
              marginRight: 5,
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
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              marginBottom: 5,
              backgroundColor: "silver",
              borderRadius: 10,
            }}
            component={<Link to="/login" />}
          >
            {" "}
            Log in
          </MenuItem>
        </div>
      </>
    );
  }
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="sidebar">
          <Sidebar>
            <BrowserView>
              <Menu>
                <div className="sidebar-btn-wrapper">
                  <MenuItem
                    rootStyles={{
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: "left",
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
                      marginLeft: 5,
                      marginRight: 5,
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

                {renderAccount()}
              </Menu>
            </BrowserView>

            <MobileView>
              <Menu>
                <div className="sidebar-btn-wrapper">
                  <MenuItem
                    rootStyles={{
                      marginLeft: 5,
                      marginRight: 5,
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
                      marginLeft: 5,
                      marginRight: 5,
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

                {renderAccount()}
              </Menu>
            </MobileView>
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
            <Route
              exact
              path="/signup"
              element={
                <SignUpForm
                  is_loggedin={state.is_loggedin}
                  username={state.username}
                  setIs_loggedin={() => setIs_loggedin}
                  setUsername={() => setUsername}
                />
              }
            />
            <Route exact path="/map" element={<Map></Map>} />

            <Route
              exact
              path="/account"
              element={
                <Account
                  is_loggedin={state.is_loggedin}
                  username={state.username}
                  setIs_loggedin={setIs_loggedin}
                  setUsername={setUsername}
                />
              }
            />
            <Route
              exact
              path="/register_admin"
              element={
                <Register_Admin
                  is_loggedin={state.is_loggedin}
                  username={state.username}
                  setIs_loggedin={setIs_loggedin}
                  setUsername={setUsername}
                />
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Login
                  is_loggedin={state.is_loggedin}
                  username={state.username}
                  setIs_loggedin={setIs_loggedin}
                  setUsername={setUsername}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

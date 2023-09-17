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

import Register_Admin from "./basic/account/Register_admin.js";
import Login from "./basic/account/Login.js";
import React from "react";
import SideBar from "./SideBar.js";
import { ThirtyFpsSelect } from "@mui/icons-material";

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

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_loggedin: "Not initalized",
      username: "Not initalized",
      component: "Home",
    };
  }

  renderComponent = () => {
    if (this.state.component === "Home") {
      return <Home />;
    } else if (this.state.component === "Education") {
      return <Education />;
    } else if (this.state.component === "SignUp") {
      return <SignUpForm setIs_loggedin={this.setIs_loggedin}
      setUsername={this.setUsername} />;
    } else if (this.state.component === "LogIn") {
      return <Login />;
    } else if (this.state.component === "Account") {
      return <Account username={this.props.username}/>;
    }
  };

  getComponent = (component) => {
    if (component === "Home") {
      this.setState({ component: "Home" });
    } else if (component === "Education") {
      this.setState({ component: "Education" });
    } else if (component === "SignUp") {
      this.setState({ component: "SignUp" });
    } else if (component === "LogIn") {
      this.setState({ component: "LogIn" });
    } else if (component === "Account") {
      this.setState({ component: "Account" });
    }
  };

  setIs_loggedin = (is_loggedin) => {
    this.setState({is_loggedin: is_loggedin});
  };

  setUsername = (username) => {
    this.state.username = username;
    console.log(`Username: ${username}`);
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">{this.renderComponent()}</div>
        <SideBar
          getComponent={this.getComponent}
          is_loggedin={this.state.is_loggedin}
        />
      </ThemeProvider>
    );
  }
}

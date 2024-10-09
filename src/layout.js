import Home from "./basic/Home.js";
import Volunteering from "./basic/volunteering/Volunteering.js";
import Account from "./basic/account/Account.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUpForm from "./basic/account/SignUpForm.js";

import Register_Admin from "./basic/account/Register_admin.js";
import Login from "./basic/account/Login.js";
import React, { useEffect } from "react";
import SideBar from "./SideBar.js";
import ResourceMap from "./basic/Resources/ResourceMap.js";
import AdminDashboard from "./basic/dashboard/AdminDashboard/AdminDashboard.js";
import TopBar from "./Topbar.js";
import Dashboard from "./basic/dashboard/Dashboard.js";
import Education from "./basic/Education.js";
import BottomBar from "./BottomBar.js";
import Music from "./basic/music/Music.js";
import SundaySocial from "./basic/SundaySocial/SundaySocial.js";
import TestPage from "./basic/TestPage/TestPage.js";

import { io } from "socket.io-client";
import { darkTheme } from "./Theme.js";
import System from "./basic/account/System.js";
import Dashboard_Login_Signup from "./basic/account/Dashboard_Login_Signup.js";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_loggedin: "Not initalized",
      username: "Not initalized",
      component: "Home",
      BottomBarComponent: null,
      is_admin: false,
      is_database_found: false,
      is_admin_created: null,
      socket: null,
      admin_pass: null
    };
  }



  renderBottomBar = () => {
    if (this.state.is_loggedin === true) {
      return <BottomBar BottomBarComponent={this.state.BottomBarComponent} username={this.state.username} />;
    }
  };

  renderTopBar = () => {
    if (this.state.is_loggedin === true) {
      return <TopBar getBottomComponent={this.getBottomComponent} />;
    }
  };

  set_component = (value) => {
    this.setState({ component: value });
  }

  setSocket = (socket_url) => {
    let socket = io(socket_url);

    socket.emit("database_init");

    this.setState({ socket: socket })
  }

  renderComponent = () => {
    if (this.state.component === "Home") {
      return <Home />;
    } else if (this.state.component === "Education") {
      return <Education />;
    } else if (this.state.component === "SignUp") {
      return (
        <SignUpForm
          setIs_loggedin={this.setIs_loggedin}
          setUsername={this.setUsername}
          socket={this.state.socket}
          admin_pass={this.state.admin_pass}
          set_admin_pass={this.set_short_pass}
        />
      );
    } else if (this.state.component === "LogIn") {
      return (
        <Login
          setIs_loggedin={this.setIs_loggedin}
          setUsername={this.setUsername}
          setIs_admin={this.setIs_admin}
          socket={this.state.socket}
        />
      );
    } else if (this.state.component === "System") {
      return <System
        is_database_found={this.is_database_found}
        set_admin_created={this.set_admin_created}
        set_admin_pass={this.set_admin_pass}
        set_component={this.set_component}
        setSocket={this.setSocket}
        socket={this.state.socket}
      />;
    }
    else if (this.state.component === "RegisterAdmin") {
      return <Register_Admin
        is_admin={this.state.is_database_found}
        socket={this.state.socket}
      />;
    } else if (this.state.component === "Resources") {
      return <ResourceMap />;
    } else if (this.state.component === "Dashboard") {
      return <Dashboard username={this.state.username} />;
    } else if (this.state.component === "AdminDashboard") {
      return <AdminDashboard username={this.state.username} />;
    } else if (this.state.component === "Music") {
      return <Music />;
    } else if (this.state.component === "SundaySocial") {
      return <SundaySocial />;
    } else if (this.state.component === "TestPage") {
      return <TestPage />;
    } else if (this.state.component === "Dashboard_Login_Signup") {
      return <Dashboard_Login_Signup />
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
    } else if (component === "Dashboard") {
      this.setState({ component: "Dashboard" });
    } else if (component === "RegisterAdmin") {
      this.setState({ component: "RegisterAdmin" });
    } else if (component === "Resources") {
      this.setState({ component: "Resources" });
    } else if (component === "System") {
      this.setState({ component: "System" });
    }
    else if (component === "AdminDashboard") {
      this.setState({ component: "AdminDashboard" });
    } else if (component === "Music") {
      this.setState({ component: "Music" });
    } else if (component === "SundaySocial") {
      this.setState({ component: "SundaySocial" });
    } else if (component === "TestPage") {
      this.setState({ component: "TestPage" });
    }
  };

  getBottomComponent = (component) => {
    if (component === "Music") {
      this.setState({ BottomBarComponent: "Music" });
    } else if (component === "Messages") {
      this.setState({ BottomBarComponent: "Messages" });
    } else if (component === "RSS") {
      this.setState({ BottomBarComponent: "RSS" });
    } else if (component === "Journal") {
      this.setState({ BottomBarComponent: "Journal" });
    }
  };


  setIs_loggedin = (is_loggedin) => {
    this.setState({ is_loggedin: is_loggedin });
  };

  setUsername = (username) => {
    this.state.username = username;
  };

  is_database_found = (value) => {
    if (value == true) {
      this.setState({ is_database_found: true })
    } else {
      this.setState({ is_database_found: false })
    }
  }

  set_admin_created = (value) => {
    console.log(`Value: ${value}`)
    if (value == true) {
      this.setState({ is_admin_created: true })
    } else if (value == false) {
      this.setState({ is_admin_created: false })
    }
  }

  set_admin_pass = () => {
    if (this.state.socket) {
      this.state.socket.on("admin_pass", (admin_pass) => {
        this.setState({ admin_pass: admin_pass })
        console.log(`Pass: ${admin_pass}`)
      });
    }
  }

  componentDidMount() {
    const loc = document.location;

    let location = loc.pathname.replace("/", "")

    if (location === "") {
      location = "Home"
    }

    this.setState({
      component: location
    })

    this.set_admin_pass();
  }

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div class="container" style={{ maxWidth: 1980, paddingTop: 30 }}>
          <div class="row">
            <div class="row">
              {this.renderTopBar()}
            </div>

            <div class="col-sm-2" style={{ maxWidth: 130 }}>
              <SideBar
                getComponent={this.getComponent}
                is_loggedin={this.state.is_loggedin}
                is_database_found={this.state.is_database_found}
                is_admin={this.state.is_admin}
                is_admin_created={this.state.is_admin_created}
              />
            </div>

            <div class="col">
              {this.renderComponent()}
            </div>

            <div class="row">
              {this.renderBottomBar()}
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

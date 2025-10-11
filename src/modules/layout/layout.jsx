import React from "react";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./Theme.jsx";

import ComponentBar from "./ComponentBar";
import Home from "../home/Home.jsx";
import Education from "../education/Education.jsx";
import Account from "../account/Account.jsx";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "Home",
      DashBottomBarComponent: null,
    };
  }

  set_component = (value) => {
    this.setState({ component: value });
  }

  renderComponent = () => {
    if (this.state.component === "Home") {
      return <Home />
    } else if (this.state.component === "Education") {
      return <Education />
    } else if (this.state.component === "Account") {
      return <Account />
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
      />;
    }
    else if (this.state.component === "RegisterAdmin") {
      return <Register_Admin
        is_admin={this.state.is_database_found}
        socket={this.state.socket}
      />;
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
    } else {
      return <Home />
    }
  };

  setIs_loggedin = (is_loggedin) => {
    this.setState({ is_loggedin: is_loggedin });
  };

  setUsername = (username) => {
    this.state.username = username;
  };

  is_database_found = (value) => {
    if (value) {
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
        <div className="container-fluid" style={{ maxWidth: 1980, paddingTop: 30 }}>

          <div className="row">
            <div className="col offset-4" style={{ paddingBottom: 30 }}>
              <h1>Leftist Media Group</h1>
            </div>

            <ComponentBar
              set_component={this.set_component}
            />

            <div className="col" style={{ paddingTop: 10 }}>
              {this.renderComponent()}
            </div>

          </div>
        </div>
      </ThemeProvider>
    );
  }
}

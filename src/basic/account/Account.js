import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

import { Card, CardContent } from "@mui/material";
import { Padding } from "@mui/icons-material";
import axios from "axios";
import { allContext } from "../../contexts";
import Dashboard from "../dashboard/Dashboard";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loggedin: "Not initalized yet",
    };
  }

  account = () => {
    if (
      this.state.is_loggedin === "Not logged in" ||
      this.state.is_loggedin === "Not initalized yet"
    ) {
      return (
        <Card>
          <CardContent>
            <h3>You are not logged in</h3>
            <p>Please sign up or log in to continue</p>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <>
          <Card>
            <CardContent>
              <h3>Profile</h3>

              <p> Username: {this.state.is_loggedin}</p>

              <Dashboard />
            </CardContent>
          </Card>
        </>
      );
    }
  };

  getStatus = () => {
    axios.defaults.withCredentials = true;

    axios
      .get(`https://localhost-0.tail5cd89.ts.net/system/is_loggedin`, {
        withCredentials: true,
      })
      .then((returned) => {
        this.setState({ is_loggedin: returned.data.username });

        if (returned.data.username !== "undefined") {
          allContext.Provider({ is_loggedin: true });
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  componentDidMount() {
    this.getStatus();
  }

  render() {
    return (
      <>
        <div>
          <Card>
            <CardContent>
              <h1>Account</h1>
              {this.account()}
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default Account;

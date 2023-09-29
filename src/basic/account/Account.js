import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

import { Card, CardContent } from "@mui/material";
import { Padding } from "@mui/icons-material";
import axios from "axios";
import Dashboard from "../dashboard/Dashboard";

export class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_loggedin: "Not initalized yet",
    };
  }

  render() {
    return (
      <>
        <Card>
          <CardContent>
            <h1>Account</h1>
            <Card>
              <CardContent>
                <h3>Profile</h3>

                <p> Username: {this.props.username}</p>

                <Dashboard />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Account;

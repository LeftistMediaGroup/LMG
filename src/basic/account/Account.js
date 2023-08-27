import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

import { Card, CardContent } from "@mui/material";
import { Padding } from "@mui/icons-material";
import axios from "axios";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loggedin: "Not initalized yet",
    };
  }

  getStatus() {
    axios
      .get(`${process.env.Wade_host}/system/is_loggedin`)
      .then((returned) => {
        this.setState({ is_loggedin: returned });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

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

              <p> is_Loggedin: {this.state.is_loggedin}</p>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default Account;

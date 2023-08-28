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

  getStatus = () => {
    axios
      .get(`https://Wade.LeftistMediaGroup.org/system/is_loggedin`, {
        withCredentials: true,
      })
      .then((returned) => {
        console.log(JSON.stringify(returned, null, 2));
        //this.setState({ is_loggedin: returned.data });
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

              <p> is_Loggedin: {JSON.stringify(this.state.is_loggedin, null, 2)}</p>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default Account;

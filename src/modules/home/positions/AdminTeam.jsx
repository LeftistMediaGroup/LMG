import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class AdminTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <h4>Admin Team</h4>

          <p>Have a passion for Organizing? Ever been a Discord mod? Wanna see Capitalism burn?
            Lets Go!</p>

          Prefered skills:
          <ul>
            <li>Discord Mod</li>
            <li>Community building</li>
            <li>Handles conflict well</li>
          </ul>
          <br />
        </CardContent>
      </Card>
    );
  }
}

import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class SupportTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <h4>Support Team</h4>

          <p>Non - 911 responders. Be it mental health crisis, or loneleness, our Support team will be there for you for whatever capitalism throws at you. </p>

          Prefered skills:
          <ul>
            <li>Mental health counseling</li>
            <li>Emergency response</li>
            <li>Listened to friends rant about their problems</li>
          </ul>
        </CardContent>
      </Card>
    );
  }
}

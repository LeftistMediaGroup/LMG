import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class Tester extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1>Tester</h1>
        </CardContent>
      </Card>
    );
  }
}

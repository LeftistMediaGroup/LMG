import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

import Wade from "../projects/Wade/Wade.js";


export default class Resist extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1>Resist</h1>

          <div class="row">
            <div className="col" style={{ padding: 15 }}>
              <Wade />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

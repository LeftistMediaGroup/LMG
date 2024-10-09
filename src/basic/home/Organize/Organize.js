import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

import LMGAsSocialMedia from "../projects/LMGAsSocialMedia.js";
import CommunitySupportNetwork from "../projects/CommunitySupportNetwork.js";

export default class Organize extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1>Organize</h1>

          <div class="row">
            <div className="col" style={{ padding: 15 }}>
              <CommunitySupportNetwork />
            </div>

            <div className="col" style={{ padding: 15 }}>
              <LMGAsSocialMedia />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

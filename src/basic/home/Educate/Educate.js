import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

import Music from "../projects/Music.js";
import { LMG_memes } from "../projects/LMG_memes.js";
import Sophia from "../projects/Sophia.js";

export default class Educate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1>Educate</h1>
          <div class="row">
            <div className="col" style={{ padding: 15 }}>
              <Music />
            </div>
          </div>

          <div class="row">
            <div className="col" style={{ padding: 15 }}>
              <Sophia />
            </div>

            <div className="col" style={{ padding: 15 }}>
              <LMG_memes />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

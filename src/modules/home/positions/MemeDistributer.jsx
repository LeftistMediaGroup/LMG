import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class MemeDistributer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <h4>Meme Distributer</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            Share Leftist Memes on a dedicated Facebook page <br />
          </div>

          <div style={{ textAlign: "left" }}>
            <br />
            Preferred skills:
            <ul>
              <li>Experience with Facebook</li>
              <li>Experience with Instagram / Tiktok</li>
            </ul>
          </div>
          <br />
        </CardContent>
      </Card>
    );
  }
}

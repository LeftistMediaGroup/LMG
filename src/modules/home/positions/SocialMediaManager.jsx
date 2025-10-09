import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class SocialMediaManager extends Component {
  render() {
    return (

      <Card variant="outlined">
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <h4>Social Media Manager</h4>
          </div>

          <div style={{ textAlign: "center" }}>
            Build and refine the online presence of
            LeftistMediaGroup.org
            <br />
          </div>

          <div style={{ textAlign: "left" }}>
            <br />

            Preferred skills:
            <ul>
              <li>Facebook, Instagram, Reddit, </li>
              <li>Tiktok</li>
              <li>Youtube</li>
              <li>Media Trends, Brand Building</li>
            </ul>
            <br />
            <br />
          </div>
        </CardContent>
      </Card>
    );
  }
}


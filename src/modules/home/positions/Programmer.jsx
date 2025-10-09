import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";


export default class Programmer extends Component {
  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <h4>Programer Backend/Frontend</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            Build the backend for projects like Wade, Sophia, ect.
            <br />
          </div>

          <div style={{ textAlign: "left" }}>
            <br />

            Preferred skills:
            <ul>
              <li>Experience with front and backend development</li>
              <li>Node JS</li>
              <li>React</li>
              <li>Rust</li>
              <li>HTML</li>
              <li>Linux</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }
}
import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class Writer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <h4>Writer</h4>

          <p> Calling all content creators!</p>
          <p>
            Write Articles, lyrics or whatever your heart desires, if it's Leftist, it's our thing!
          </p>

           Preferred skills:
            <ul>
              Do you like to write things?
            </ul>
          
        </CardContent>
      </Card>
    );
  }
}

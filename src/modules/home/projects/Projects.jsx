import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";
import Educate from "../Educate/Educate";
import Organize from "../Organize/Organize";
import Resist from "../Resist/Resist";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col">
              <Card variant="outlined" >
                <CardContent>
                  <h4>Projects</h4>
                </CardContent>
              </Card>
              <br />

              <p>
                All projects are focused on a specific avenue of dismantling
                Capitalism one brick at a time.
              </p>

              <Educate />
              <Organize />
              <Resist />
            </div >
          </div>
        </CardContent>
      </Card>
    );
  }
}

import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

import MemeDistributer from "./MemeDistributer";
import Programmer from "./Programmer";
import SocialMediaManager from "./SocialMediaManager";
import Writer from "./Writer";
import SupportTeam from "./SupportTeam";
import AdminTeam from "./AdminTeam";


export default class Positions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div className="row">
            <h4>Join Our Team!</h4>

            <div className="col" style={{ padding: 15 }}>
              <MemeDistributer />
            </div>

            <div className="col" style={{ padding: 15 }}>
              <Writer />
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ padding: 15 }}>
              <SocialMediaManager />
            </div>

            <div className="col" style={{ padding: 15 }}>
              <Programmer />
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col" style={{ padding: 15 }}>
                <SupportTeam />
              </div>
              <div className="col" style={{ padding: 15 }}>
                <AdminTeam />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

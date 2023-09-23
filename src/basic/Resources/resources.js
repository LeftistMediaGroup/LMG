import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";
import ResourceList from "./resourceList.json";

export class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResourceList: ResourceList,
    };
  }

  render() {
    const resourceListItems = Object.values(this.state.ResourceList).map(
      (item) => (
        <Card variant="outlined">
          <CardContent>{item.name}</CardContent>
        </Card>
      )
    );

    return (
      <>
        <Card variant="outlined">
          <CardContent>
            <h1>Resources</h1>

            <Card>
              <CardContent>
                <h2>USA</h2>
                {resourceListItems}
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Resources;

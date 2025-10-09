import React from "react";

import { Button, Card } from "@mui/material";

export default class ComponentBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined">
        <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <div className="col">
            <Card variant="outlined">
              <Button
                onClick={() => {
                  if (this.state) {
                    this.props.set_component("Home");
                  }
                }}
              >
                Home
              </Button>
            </Card>
          </div>

          <div className="col">
            <Card variant="outlined">
              <Button
                onClick={() => {
                  if (this.state) {
                    this.props.set_component("Education");
                  }
                }}
              >
                Education
              </Button>
            </Card>
          </div>

          <div className="col">
            <Card variant="outlined">
              <Button
                onClick={() => {
                  if (this.state) {
                    this.props.set_component("Resources");
                  }
                }}
              >
                Resources
              </Button>
            </Card>
          </div>

          <div className="col">
            <Card variant="outlined">
              <Button
                onClick={() => {
                  if (this.state) {
                    this.props.set_component("Account");
                  }
                }}
              >
                Account
              </Button>
            </Card>
          </div>
        </div>
      </Card>
    );
  }
}

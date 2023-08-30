import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export class Sophia extends Component {
  render() {
    return (
      <>
        <Card>
          <CardContent>
            <div style={{ textAlign: "center" }}>
              <h4>Sophia</h4>
            </div>

            <div style={{ textAlign: "center" }}>
              Ask Leftist questions to be answered, discussed, or debated.
            </div>

            <br />

            <div className="row">
              <div className="col">
                Premises can be answered or escalated into a formal debate with
                Debate Blocks.{" "}
              </div>

              <div className="col">
                Within traditional debate, you have a thesis or main point, and
                that's made up of premises or single arguments. <br /> <br />
                Within Sophia, things are the same, but a bit different, Sophia
                uses rectangular blocks to visualize argumentation.{" "}
              </div>

              <div className="col">
                Each block is a 2D rectangle covered in text. <br /> <br />
                Blocks are divided into a thesis (purple), supporting (green),
                neutral (grey), or opposing (red). <br /> <br />
                Multiple premises can connected to a thesis.
              </div>

              <div className="col">
                If someone has thoughts on your premise, they can post a
                thought, or add a premise to your premise that either supports,
                opposes or is neutral to your premise.
              </div>
            </div>

            <div className="row-centered">
              <br />
              Sophia will generate meaningful, thought progressing ideas and
              Praxis.
            </div>
            <br />

            <div style={{ textAlign: "center" }}>Positions</div>

            <div className="row">
              <div className="col">
                <Card variant="outlined">
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <h4> Node js Programer</h4>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      Work in Node js to build the backend for
                      LeftistMediaGroup.org and Sophia
                      <br />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <br />
                      Time Requirement: <br />
                      <ul>
                        <li>1 Hour a week</li>
                      </ul>
                      Position Requirements:
                      <ul>
                        <li>Experience with front and backend development</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Sophia;

import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";


export class Music extends Component {
  render() {
    return (
      <>
        <Card>
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <h4>Leftism Through Music</h4>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p>
                            This course will provide listeners with a playlist
                            of 80+ downloadable leftist songs to listen to and
                            reflect on centered around leftist topics.
                          </p>
                        </div>
                      </div>

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
                                  <li>
                                    Experience with front and backend
                                    development
                                  </li>
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

export default Music;
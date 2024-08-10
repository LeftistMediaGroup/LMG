import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";

export class Wade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      WadeData: {
        datasets: [
          {
            data: [50, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
          },
        ],
        labels: ["Software 50%", "Personnel 50%"],
      },
      WadeOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    };
  }
  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <h4>Wade</h4>
            <h5>They’re already organized and watching, why aren’t we?</h5>
          </div>

          <div style={{ textAlign: "center" }}>
            Community response system made to assist with the development,
            design, and organization of protests
          </div>
          <br />

          <div className="row">
            Wade is the mixture of Software and personnel.
            <br />

            <div className="col" style={{ textAlign: "center", maxHeight: 450 }}>
              <br />
              <br />
              <Doughnut
                data={this.state.WadeData}
                options={this.state.WadeOptions}
              />
            </div>
          </div>
          <br />
          <br />
          <br />

          <div class="row">
            <div class="col">

              <Card>
                <CardContent>
                  <h5>Software</h5>

                  <p>The software element for Wade consists of:</p>

                  <ul>
                    <li>
                      Sending and viewing streams, encrypted chat, and a viewable library for education.
                    </li>

                    <li>
                      An Android app that does all that plus it can send your stream to organizers to view
                    </li>

                    <li>
                      A server for managing chats, streams, a library, and all other data.                </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h5>Software Tools:</h5>

                  <ul>
                    <li>
                      Communication

                      Encrypted communication channels to organize that evolve and collapse as needed

                      <ul>
                        <li>
                          Medics
                        </li>
                        <li>
                          Security
                        </li>
                        <li>
                          Home Support
                        </li>
                        <li>
                          City Groups
                        </li>
                      </ul>
                    </li>
                    <br />

                    <li>
                      Maps

                      Mark and view points of intrest

                      <ul>
                        <li>
                          Police
                        </li>
                        <li>
                          Medics
                        </li>
                        <li>
                          Danger Areas
                        </li>
                      </ul>
                    </li>
                    <br />


                    <li>
                      Education

                      A collection of resources for people to know their rights, history about the movement and links to other helpful resources
                    </li>
                    <br />


                    <li>
                      Livestream phone as bodycamera

                      <ul>
                        <li>
                          Sources come from all over the internet
                        </li>
                        <li>
                          Sources can steam directly to wade
                        </li>

                        <li>
                          Verbal Coordination from admin team
                        </li>
                      </ul>
                    </li>
                    <br />


                    <li>
                      I need a medic button

                      GPS sync between you and a medic
                    </li>
                    <br />


                    <li>
                      I’m being pulled over button

                      Connect you to home support and record everything
                    </li>
                    <br />


                    <li>
                      Fund Raising

                      Raise funds for direct payments to those in need
                    </li>
                    <br />


                    <li>
                      Audio sync

                      Sync event speakers to everyone's phones
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div class="col">
              <h5>Personnel</h5>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Wade;

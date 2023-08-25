import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import { Dropdown } from "react-bootstrap";

import SignUpForm from "./SignUpForm.js";
import { Card, CardContent } from "@mui/material";
import { Padding } from "@mui/icons-material";

export class Home extends Component {
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
        labels: ["Personnel 50%", "Software 50%"],
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
      <>
        <div>
          <div className="page-header">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="!#" onClick={(event) => event.preventDefault()}>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Landing
                </li>
              </ol>
            </nav>
          </div>

          <div className="row-centered">
            <Card variant="outlined">
              <CardContent>
                <h1>Leftist Media Group</h1>

                <p>
                  Leftist Media group is dedicated to Organizing the Left and
                  starting the Revolution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="row-centered">
            <Card>
              <CardContent>
                <h4> Lets Overthrow Capitalism together</h4>

                <div className="row">
                  <div className="col-sm">
                    <Card>
                      <CardContent>
                        <p>
                          We are nearing the end of our fascist leadership path
                          and our escalating climate catastrophe.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col-sm">
                    <Card>
                      <CardContent>
                        <p>
                          Overthrowing Capitalism will require a multifaceted
                          attack from every angle possible.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card variant="outlined">
            <CardContent style={{ borderColor: "red" }}>
              <h4>Projects</h4>

              <p>All projects need volunteers</p>

              <p>
                All projects are focused on a specific avenue of dismantling
                Capitalism one brick at a time.
              </p>

              <div className="row">
                <div className="col" style={{ padding: 15 }}>
                  <Card>
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <h4>LMG - Memes</h4>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        A facebook page for sharing leftist propaganda
                      </div>

                      <br />

                      <div style={{ textAlign: "center" }}>Positions</div>

                      <div className="row">
                        <div className="col">
                          <Card variant="outlined">
                            <CardContent>
                              <div style={{ textAlign: "center" }}>
                                <h4>Meme Distributer</h4>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Share Leftist Memes on a dedicated Facebook page{" "}
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
                                  <li>Experience with Facebook</li>
                                  <li>
                                    Preferred - Experience with Facebook Pages
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="col" style={{ padding: 15 }}>
                  <Card>
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <h4>LMG for social media</h4>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        New social media site
                      </div>

                      <br />

                      <div style={{ textAlign: "center" }}>Positions</div>

                      <div className="row">
                        <div className="col">
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
                                Time Requirement: <br />
                                <ul>
                                  <li>1 Hour a week</li>
                                </ul>
                                Position Requirements:
                                <ul>
                                  <li>
                                    Facebook, Instagram, Reddit, Media Trends,
                                    Brand Building, or social media managing
                                    intrest or experience
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="col" style={{ padding: 15 }}>
                <Card>
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <h4>Sophia</h4>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      Ask Leftist questions to be answered, discussed, or
                      debated.
                    </div>

                    <br />

                    <div className="row">
                      <div className="col">
                        Premises can be answered or escalated into a formal
                        debate with Debate Blocks.{" "}
                      </div>

                      <div className="col">
                        Within traditional debate, you have a thesis or main
                        point, and that's made up of premises or single
                        arguments. <br /> <br />
                        Within Sophia, things are the same, but a bit different,
                        Sophia uses rectangular blocks to visualize
                        argumentation.{" "}
                      </div>

                      <div className="col">
                        Each block is a 2D rectangle covered in text. <br />{" "}
                        <br />
                        Blocks are divided into a thesis (purple), supporting
                        (green), neutral (grey), or opposing (red). <br />{" "}
                        <br />
                        Multiple premises can connected to a thesis.
                      </div>

                      <div className="col">
                        If someone has thoughts on your premise, they can post a
                        thought, or add a premise to your premise that either
                        supports, opposes or is neutral to your premise.
                      </div>
                    </div>

                    <div className="row-centered">
                      <br />
                      Sophia will generate meaningful, thought progressing ideas
                      and Praxis.
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
                                <li>
                                  Experience with front and backend development
                                </li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="row">
                <div className="col" style={{ padding: 15 }}>
                  <Card>
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <h4>Wade</h4>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        Community response system made to assist with the
                        development, design, and organization of protests
                      </div>

                      <div className="row">
                        <div className="col" style={{ textAlign: "center" }}>
                          <Doughnut
                            data={this.state.WadeData}
                            options={this.state.WadeOptions}
                          />
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
                </div>

                <div className="col" style={{ padding: 15 }}>
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
                </div>
              </div>

              <div className="col" style={{ padding: 15 }}>
                <Card>
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <h4>Leftist Media Group for social media</h4>
                    </div>

                    <br />
                    <div className="row-centered">
                      <Card variant="outlined">
                        <CardContent>
                          <p>
                            All users assigned randomized username. DO NOT SHARE
                            PERSONAL DETAILS assume everyone is a cop
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <br />
                    <div className="row-centered">
                      <h2>Community</h2>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h4>Mentorship </h4>

                        <p>
                          Leftist mentors find connect with new Leftists and
                          share knowledge and experience.
                        </p>
                      </div>

                      <div className="col">
                        <h4> Music </h4>

                        <p>
                          Create and share playlists of leftist music tailored
                          to your friends
                        </p>
                      </div>

                      <div className="col">
                        <h4> Education </h4>
                        <p>Intro to Leftistm guides.</p>
                        <p>Library of leftist texts.</p>
                      </div>
                    </div>

                    <div className="row-centered">
                      <h2> Organization </h2>

                      <br />

                      <div className="row">
                        <div className="row-centered">
                          <h4>local Praxis meets </h4>

                          <div className="row">
                            <div className="col">
                              <p>Choose public place in the city you live.</p>
                            </div>

                            <div className="col">
                              <p>
                                Choose a community praxis task (garbage cleanup,
                                protest, unhoused assistance, ect){" "}
                              </p>
                            </div>

                            <div className="col">
                              <p>
                                Others in your city rsvp to event and organize
                                goals and supplies
                              </p>
                            </div>

                            <div className="col">
                              <p>Task gets accomplished </p>
                            </div>
                          </div>

                          <div className="row-centered">
                            <p className="font-weight-bold">
                              Achievement unlocked, Praxis
                            </p>
                          </div>

                          <div className="row">
                            <div className="col">
                              <h2> Emergency Fund </h2>

                              <div className="row-centered">
                                <p>
                                  Directly send money to those in need. <br />
                                  Recipient posts a request for assistance,
                                  specifying situation.
                                </p>
                              </div>

                              <div className="row">
                                <div className="col">
                                  <p>LMG verifies recipient is real person.</p>
                                </div>
                                <div className="col">
                                  <p>
                                    Donor selects post, then is given preferred
                                    money transfer details for recipient.{" "}
                                  </p>
                                </div>
                                <div className="col">
                                  Upon successful transaction, recipient may
                                  choose to open a chat with the donor to thank
                                  them. <p />{" "}
                                </div>
                              </div>

                              <div style={{ textAlign: "center" }}>
                                Positions
                              </div>

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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="row-centerd" tyle={{ padding: 15 }}>
                <Card>
                  <CardContent>
                    <h4>Contact</h4>
                    <p>Leftist Media Group</p>

                    <div className="row-centerd">
                      <Card variant="outlined">
                        <CardContent>
                          <p className="font-weight-bold"> E-mail </p>
                          <p className="mb-2"> LeftistMediaGroup@gmail.com </p>
                          <p className="font-weight-bold"> Web</p>
                          <p> LeftistMediaGroup.org </p>
                          <p className="font-weight-bold"> Facebook</p>
                          <p>Facebook.com/LMG</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="row-centerd">
                      <Card variant="outlined">
                        <CardContent>
                          <p className="font-weight-bold">Coverage</p>

                          <div className="row">
                            <div className="col">
                              <p>USA</p>
                            </div>
                            <div className="col">
                              <p>Europe</p>
                            </div>

                            <div className="col">
                              <p>Australia</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default Home;

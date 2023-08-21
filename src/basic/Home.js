import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import { Dropdown } from "react-bootstrap";

import SignUpForm from "./SignUpForm.js";
import { Card, CardContent } from "@mui/material";

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
            <CardContent style={{borderColor: "red"}}>
              <h4>Projects</h4>

              <p>All projects need volunteers</p>

              <p>
                All projects are focused on a specific avenue of dismantling
                Capitalism one brick at a time.
              </p>

              <div className="row">
                <div className="col">
                  <Card>
                    <CardContent>
                      <h6>LMG - Memes</h6>
                      <p>A facebook page for sharing leftist propaganda.</p>
                      Positions
                      <br />
                      <div className="row">
                        <div className="col">
                          <Card>
                            <CardContent>
                              <div className="row">
                                Meme Distributer <br />
                                Browse and share Leftist Memes on a dedicated
                                Facebook page <br />
                                <br />
                                <br />
                              </div>

                              <div
                                className="row"
                                style={{ textAlign: "left" }}
                              >
                                Time Requirement: <br />
                                1 Hour a week <br />
                                Position Requirements: <br />
                                Experience with Facebook <br />
                                Preferred - Experience with Facebook Pages
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="col">
                  <Card>
                    <CardContent>
                      <h6>LMG for social media</h6>

                      <div className="row">
                        <div className="col">
                          <p>New social media site</p>
                        </div>

                        <div className="col">
                          Positions Available Positions & Information Social
                          Media Manager Build and refine the online presence of
                          LeftistMediaGroup.org <br />
                          Time Requirement: <br />
                          1 Hour a week <br />
                          Preferred Experience: <br />
                          Facebook, Instagram, Reddit, Media Trends, Brand
                          Building, or social media managing
                          <br />
                        </div>

                        <div className="col">
                          <p>0 volunteers</p>
                          <p>? Tasks </p>
                          <p>? Issues</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="row">
                  <div className="col">
                    <Card>
                      <CardContent>
                        <h6>Sophia</h6>

                        <div className="row">
                          <div className="col">
                            <p>
                              Ask Leftist questions to be answered, discussed,
                              or debated.
                            </p>
                          </div>

                          <div className="col">
                            Positions Available Positions & Information Node js
                            Programer Work in Node js to build the backend for
                            LeftistMediaGroup.org. <br />
                            Design and implement Wade components into website
                            backend. Time Requirement: <br />
                            1 Hour a week <br />
                            Position Requirements: <br />
                            Experience with Node js, Python or C <br />
                            Preferred - Experience with front and backend
                            development React Programer Work in React to build
                            the frontend Sophia component for
                            LeftistMediaGroup.org <br />
                            Time Requirement: <br />
                            1 Hour a week <br />
                            Position Requirements: <br />
                            Experience with React, CSS, HTML, or Node js
                            Preferred - Experience with front and backend
                            development
                          </div>

                          <div className="col">
                            <p>2 volunteers</p>
                            <p>? Tasks </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Card>
                    <CardContent>
                      <h6>Wade</h6>

                      <div className="row">
                        <div className="col-md-4">
                          <p>
                            Community response system made to assist with the
                            development, design, and organization of protests.
                          </p>
                        </div>

                        <div className="col-md-4">
                          <Doughnut
                            data={this.state.WadeData}
                            options={this.state.WadeOptions}
                          />
                        </div>

                        <div className="col">
                          Positions Available Positions & Information Node js
                          Programer Work in Node js to build the backend for
                          LeftistMediaGroup.org. <br />
                          Design and implement Wade components into website
                          backend. Time Requirement: <br />
                          1 Hour a week <br />
                          Position Requirements: <br />
                          Experience with Node js, Python or C <br />
                          Preferred - Experience with front and backend
                          development
                        </div>

                        <div className="col-md-4">
                          <p>0 volunteers</p>
                          <p>? Tasks </p>
                          <p>? Issues</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="col">
                  <Card>
                    <CardContent>
                      <h6>Leftism Through Music</h6>

                      <div className="row">
                        <div className="col">
                          <p>
                            This course will provide listeners with a playlist
                            of 80+ downloadable leftist songs to listen to and
                            reflect on centered around leftist topics.
                          </p>
                        </div>

                        <div className="row">
                          Positions Available Positions & Information React
                          Programer Work in React to build the frontend music
                          player component for LeftistMediaGroup.org <br />
                          Time Requirement: <br />
                          1 Hour a week <br />
                          Position Requirements: <br />
                          Experience with React, CSS, HTML, or Node js <br />
                          Preferred - Experience with front and backend
                          development
                        </div>

                        <div className="col">
                          <p>0 Volunteers</p>
                          <p>? Tasks</p>
                          <p>? Issues</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4>Leftist Media Group for social media</h4>
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
                <h3>Community</h3>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <h4>Mentorship </h4>

                  <p>
                    Leftist mentors find connect with new Leftists and share
                    knowledge and experience.
                  </p>
                </div>

                <div className="col">
                  <h4> Music </h4>

                  <p>
                    Create and share playlists of leftist music tailored to your
                    friends
                  </p>
                </div>

                <div className="col">
                  <h4> Education </h4>
                  <p>Intro to Leftistm guides.</p>
                  <p>Library of leftist texts.</p>
                </div>
              </div>

              <div className="row-centered">
                <h4> Organization </h4>

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
                          Others in your city rsvp to event and organize goals
                          and supplies
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
                        <h4> Emergency Fund </h4>

                        <div className="row-centered">
                          <p>
                            Directly send money to those in need. <br />
                            Recipient posts a request for assistance, specifying
                            situation.
                          </p>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p>LMG verifies recipient is real person.</p>
                          </div>
                          <div className="col">
                            <p>
                              Donor selects post, then is given preferred money
                              transfer details for recipient.{" "}
                            </p>
                          </div>
                          <div className="col">
                            Upon successful transaction, recipient may choose to
                            open a chat with the donor to thank them. <p />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <div className="row-centered">
                <h1>Sophia - Knowledge sharing form</h1>

                <p>
                  Ask Leftist questions to be answered, discussed, or debated.
                </p>
              </div>

              <div className="row">
                <div className="col">
                  Premises can be answered or escalated into a formal debate
                  with Debate Blocks.{" "}
                </div>

                <div className="col">
                  Within traditional debate, you have a thesis or main point,
                  and that's made up of premises or single arguments. <br />
                  Within Sophia, things are the same, but a bit different,
                  Sophia uses rectangular blocks to visualize argumentation.{" "}
                </div>

                <div className="col">
                  Each block is a 2D rectangle covered in text. <br />
                  Blocks are divided into a thesis (purple), supporting (green),
                  neutral (grey), or opposing (red). <br />
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
                Sophia will generate meaningful, thought progressing ideas and
                Praxis.
              </div>
            </CardContent>
          </Card>
          <div className="row-centerd">
            <Card>
              <CardContent>
                <h4>Contact</h4>
                <p>Leftist Media Group</p>

                <div className="row">
                  <div className="col">
                    <Card>
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

                  <div className="col">
                    <Card>
                      <CardContent>
                        <p className="font-weight-bold"> E-mail </p>
                        <p className="mb-2"> LeftistMediaGroup@Gmail.com </p>
                        <p className="font-weight-bold"> Web</p>
                        <p> LeftistMediaGroup.org </p>
                        <p className="font-weight-bold"> Facebook</p>
                        <p>Facebook.com/LMG</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

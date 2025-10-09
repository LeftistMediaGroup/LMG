import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

export default class Personnel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined" style={{ backgroundColor: "#ff6483" }}>
        <CardContent>
          <h5>Personnel</h5>

          <p>Personnel for Wade is divided into two groups.</p>

          <div className="row">
            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Boots on the Ground</h4>
                  <p>The eyes, ears and heart of the protest</p>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Streamers</h4>

                        <p>
                          Streamers can either stream indirectly to Twitch, Facebook or Youtube then the streams will be replayed on LeftistMediaGroup.com or they can stream directly to the LMG server to then be displayed on the website show the world what is going on
                        </p>

                        <p>
                          Streamers streaming indirectly get all the credit for their work as each stream is clearly labeled and linked to owner
                        </p>

                        <p>
                          Streamers streaming via the (open source) LMG app can choose to be anonymous.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="col">
                      <Card variant="outlined">
                        <CardContent>
                          <h4>Security</h4>
                          <p> Security members will be the front line of defence</p>

                          <p>
                            They will train virtually and their main goal is to keep other protestors safe from police violence. Tactics are mainly consolidated from the Hong Kong protests like using umbrellas and homemade shields to form a shield wall and using thermoses and leaf blowers to neutralize tear gas. (https://en.wikipedia.org/wiki/Tactics_and_methods_surrounding_the_2019%E2%80%9320_Hong_Kong_protests)
                          </p>

                          <p>Security will scout for police along the march route and will direct the flow of the protest to avoid police if possible and prevent kettling.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Card variant="outlined">
                    <CardContent>
                      <h4>Suppliers</h4>
                      <p>
                        Suppliers will be focused on moving supplies through a protest. Some of these supplies can include masks, goggles, shields, umbrellas, first aid equipment and water
                      </p>
                    </CardContent>
                  </Card>

                </CardContent>
              </Card>
            </div>

            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4> Home support </h4>
                        <br />

                        <p>General Helpline, manages communications, supplies, personnel and livestream</p>

                        <p>Made up of people with internet access that can help the boots on the ground from home (anywhere in the world).</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Boots on the Ground support</h4>
                        On the ground support manages contacting emergency contacts in case of a medical emergency or arrest. They will also act as a general helpline for protestors looking for more information about the movement or help with finding a medic.
                        Ideal for people that can’t make it to the protests but want to help
                        Other tasks that they may do is manage and update live maps, communications, and tasking security personnel.
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Stream Manager</h4>
                        The Stream Manager operates the live streaming software allowing for camera angles from across the country.
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Community Outreach</h4>
                        Community outreach finds protestors and streamers that are expected to be protesting and start coordinating efforts.
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Researchers</h4>
                        Researchers find information on the movement, community support, and compile them for people to understand on the website.
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card variant="outlined">
                      <CardContent>
                        <h4>Organizers</h4>
                        Organizers will plan the events, logistics, speakers, security concerns ect.
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card >
    );
  }
}

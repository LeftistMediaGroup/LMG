import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";

import StreamList from "/Photos/StreamList.png";
import Streams from "/Photos/Streams.png"
import Comms from "/Photos/Comms.png"
import CommSec from "/Photos/CommSec.png"
import Map from "/Photos/Map.jpg"
import SatMap from "/Photos/SatMap.png"
import Medical from "/Photos/Medical.png"

export default class Software extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card variant="outlined" style={{ backgroundColor: "#36a1eb" }}>
        <CardContent>
          <h5>Software</h5>

          <p>The software element for Wade consists of:</p>

          <p>
            Sending and viewing streams, encrypted chat, and a viewable library for education.
          </p>

          <p>Andriod and web app</p>

          <p>
            A server for managing chats, streams, a library, and all other data.
          </p>

          <div className="row">
            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4> Communication </h4>
                  <img src={Comms} style={{ maxHeight: 400, maxWidth: 250 }} />
                  <br />
                  <br />

                  <p>Encrypted communication channels to organize that evolve and collapse as needed</p>
                </CardContent>
              </Card>
            </div>

            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Maps</h4>
                  <img src={Map} style={{ maxHeight: 400, maxWidth: 250 }} />
                  <br />
                  <br />

                  <p>Mark and view points of interest</p>
                  <p>Police, Medics, Danger Areas</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Medics</h4>
                  <img src={Medical} style={{ maxHeight: "100%", maxWidth: "100%" }} />
                  <br />
                  <br />

                  <p>I need a medic button</p>
                  <p>GPS sync between you and a medic</p>
                  <p> Audio/Visual Coordination from admin team</p>                </CardContent>
              </Card>
            </div>

            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Education</h4>

                  <img src={CommSec} style={{ maxHeight: "90%", maxWidth: 300 }} />
                  <br />
                  <br />

                  <p>A collection of resources for people to know their rights, history about the movement and links to other helpful resources</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Security</h4>

                  <p>I’m being pulled over button</p>
                  <p>Connect you to home support and record everything</p>
                </CardContent>
              </Card>
            </div>

            <div className="col">
              <Card variant="outlined">
                <CardContent>
                  <h4>Home Support</h4>

                  <p>Cordinate EVERYTHING</p>
                  <p>Raise funds for direct payments to those in need</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <br />

          <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
            <Card variant="outlined" style={{ marginLeft: 0, marginRight: 0 }}>
              <CardContent>
                <h4>Livestream</h4>
                <img src={StreamList} style={{ maxHeight: 600, maxWidth: "100%", marginLeft: -20, marginRight: -40 }} />
                <br />
                <img src={Streams} style={{ maxHeight: 600, maxWidth: "100%", marginLeft: -20, marginRight: -40 }} />
                <br />
                <br />
                <p>
                  Sources come from all over the internet

                  Audio sync

                  Sync event speakers with phones with app
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card >
    );
  }
}

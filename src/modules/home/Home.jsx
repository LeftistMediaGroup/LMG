import React from "react";

import { Card, CardContent } from "@mui/material";

import Contact from "./Contact.jsx";
import Positions from "./positions/Positions.jsx";
import Projects from "./projects/Projects.jsx";

export default class Home extends React.Component {
  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="col-sm-2" >
            <Card variant="outlined">
              <div style={{ paddingLeft: 40 }}>Home </div>
            </Card>
          </div>

          <div className="row mt-3">
            <div className="row-centered">

              <h1>Leftist Media Group</h1>

              <p>
                Leftist Media group is dedicated to Organizing the Left and
                starting the Revolution.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="row-centered">
              <Card>
                <CardContent>
                  <h4> Lets Overthrow Capitalism together</h4>

                  <div className="row">
                    <div className="col-sm">
                      <Card variant="outlined">
                        <CardContent>
                          <p>
                            Due to our our fascist leadership path we are nearing the end of our escalating climate catastrophe.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="col-sm">
                      <Card variant="outlined">
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
          </div>

          <Projects />
          <Positions />
          <Contact />
        </CardContent>
      </Card>
    );
  }
}

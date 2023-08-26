import React, { Component } from "react";

import { Card, CardContent } from "@mui/material";


export class Contact extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Contact;
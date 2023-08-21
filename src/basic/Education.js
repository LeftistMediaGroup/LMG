import React, { Component } from "react";

import WhatIsCapitalism from "./education/What_is_Capitalism.js";
import WhatIsAnarchism from "./education/What_is_Anarchism.js";
import Revolution from "./education/Revolution.js";
import { Card, CardContent } from "@mui/material";
import Library from "./education/Library/Library.js";

export class Education extends Component {
  render() {
    return (
      <>
        <div>
          <div className="page-header">
            <h3 className="page-title"> Education </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="!#" onClick={(event) => event.preventDefault()}>
                    Education
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
          </div>

          <div className="proBanner">
            <div>
              <span className="d-flex align-items-center purchase-popup">
                <p>Sign up to volunteer with us!</p>
                <a
                  href="leftistmediagroup.com/volunteering"
                  className="btn btn-sm purchase-button ml-auto"
                >
                  Volunteer Now
                </a>
              </span>
            </div>
          </div>

          <Card>
            <CardContent>
              <div className="row-centered">
                <h4>Lets Overthrow Capitalism together</h4>
                <p>
                  The goal of overthrowing Capitalism will require many
                  subtasks, as the only way to defeat it is through the power of
                  love, or in other words, a multifaceted attack from every
                  angle possible.
                </p>
              </div>
              <button className="btn btn-outline-light btn-rounded get-started-btn">
                See Projects
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4>Topics to explore</h4>

              <Card>
                <CardContent>
                  <div className="row">
                    <div className="col"> What is Capitalism? </div>
                    <div className="col"> What is Anarchism? </div>
                    <div className="col"> Revolution </div>
                  </div>

                  <div className="row-centered">
                    <br /> <br />
                    <p> - Coming soon! </p>
                    <br />
                  </div>

                  <div className="row">
                    <div className="col"> Anarcho-Syndicalism </div>
                    <div className="col"> Revolutionary Thinking </div>
                    <div className="col"> The State </div>
                    <div className="col"> Workers Rights </div>
                    <div className="col"> BLM </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <WhatIsCapitalism />

          <WhatIsAnarchism />

          <Revolution />

          <Library></Library>
        </div>
      </>
    );
  }
}

export default Education;

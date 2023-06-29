import React, { Component } from "react";

import WhatIsCapitalism from "./education/What_is_Capitalism.js";
import WhatIsAnarchism from "./education/What_is_Anarchism.js";
import Revolution from "./education/Revolution.js";
import { Card, CardContent } from "@mui/material";

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
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn-sm purchase-button ml-auto"
                >
                  Volunteer Now
                </a>
                <i
                  className="mdi mdi-close bannerClose"
                  onClick={this.toggleProBanner}
                ></i>
              </span>
            </div>
          </div>

          <Card>
            <CardContent>
              <div className="row">
                <h4 className="mb-1 mb-sm-0">
                  Lets Overthrow Capitalism together
                </h4>
                <p className="mb-0 font-weight-normal d-none d-sm-block">
                  {" "}
                  The goal of overthrowing Capitalism will require many
                  subtasks, as the only way to defeat it is through the power of
                  love, or in other words, a multifaceted attack from every
                  angle possible.
                </p>
              </div>
              <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                <button className="btn btn-outline-light btn-rounded get-started-btn">
                  See Projects
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="card-title">Topics to explore</h4>
              <ul className="list-arrow">
                <li> What is Capitalism? </li>
                <li> What is Anarchism? </li>
                <li> Revolution </li>

                <br></br>

                <p> - Coming soon! </p>

                <li> Anarcho-Syndicalism </li>
                <li> Revolutionary Thinking </li>
                <li> The State </li>
                <li> Workers Rights </li>
                <li> BLM </li>
              </ul>
            </CardContent>
          </Card>

          <WhatIsCapitalism />

          <WhatIsAnarchism />

          <Revolution />
        </div>
      </>
    );
  }
}

export default Education;

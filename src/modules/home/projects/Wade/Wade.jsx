import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, rgbToHex } from "@mui/material";

import Software from "./Software";

import Info from "/Photos/Info.png"
import Personnel from "./Personnel";

export default class Wade extends Component {
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
      <Card variant="outlined" style={{ textAlign: "center" }}>
        <CardContent>
          <div >
            <h4>Wade</h4>
            <h5>They’re already organized and watching, why aren’t we?</h5>
            <br />

            <img src={Info} style={{ maxHeight: "100%", maxWidth: "100%" }} />
          </div>
          <br />

          <div>
            <h4> What is Wade?</h4>

            <p>
              Wade is a community response system made to assist with the development,
              design, and organization of protests
            </p>
          </div>


          <div className="row">
            <p>Wade is the mixture of Software and personnel. </p>            <div className="col vh-100 d-flex justify-content-center align-items-center" style={{ maxHeight: 450 }}>
              <br />
              <Doughnut
                data={this.state.WadeData}
                options={this.state.WadeOptions}
              />
            </div>
          </div>
          <br />


          <div className="row">
            <div className="col">
              <Software />
            </div>

            <div className="col">
              <Personnel />
            </div>
          </div>
        </CardContent>
      </Card >
    );
  }
}
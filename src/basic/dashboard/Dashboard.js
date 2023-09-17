import React, { Component } from "react";

import { VectorMap } from "react-jvectormap";

import Chat from "./chat/Chat.js";
import Calendar1 from "./Calendar.js";
import Stats from "./stats/Stats.js";
import Music from "./music/Music.js";
import Sync from "./sync/Sync.js";
import Kanban1 from "./kanban/kanban.js";

import { ProSidebarProvider } from "react-pro-sidebar";

const mapData = {
  BZ: 75.0,
  US: 56.25,
  AU: 15.45,
  GB: 25.0,
  RO: 10.25,
  GE: 33.25,
};

export class Dashboard extends Component {
  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  render() {
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          panOnDrag={true}
          containerClassName="dashboard-vector-map"
          focusOn={{
            x: 0.5,
            y: 0.5,
            scale: 1,
            animate: true,
          }}
          series={{
            regions: [
              {
                scale: ["#3d3c3c", "#f2f2f2"],
                normalizeFunction: "polynomial",
                values: mapData,
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default Dashboard;

/*
        <Calendar1></Calendar1>

        <ProSidebarProvider>
          <Chat></Chat>
        </ProSidebarProvider>

        <Music></Music>

        <Stats></Stats>

        <Sync></Sync>
*/

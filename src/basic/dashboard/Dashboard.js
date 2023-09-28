import React, { Component } from "react";

import Chat from "./chat/Chat.js";
import Calendar1 from "./Calendar.js";
import Stats from "./stats/Stats.js";
import Music from "./music/Music.js";
import Sync from "./sync/Sync.js";
import Kanban1 from "./kanban/kanban.js";

import { ProSidebarProvider } from "react-pro-sidebar";


export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Music></Music>
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


        <Stats></Stats>

        <Sync></Sync>
*/

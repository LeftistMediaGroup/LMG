import { Button, THEME_ID } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import Music from "./basic/home/Music.js";
import Chat from "./basic/dashboard/chat/Chat.js";
import RSS from "./basic/dashboard/RSS/RSS.js";

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { RSSFeed: [] };
  }

  returnFeed = (feed) => {
    this.setState({ RSSFeed: feed });
  };

  renderBottomComponent = () => {
    if (this.props.BottomBarComponent === "Music") {
      return <Music />;
    } else if (this.props.BottomBarComponent === "Messages") {
      return <Chat />;
    } else if (this.props.BottomBarComponent === "RSS") {
      return <RSS returnFeed={this.returnFeed} RSSFeed={this.state.RSSFeed} />;
    } else if (this.props.BottomBarComponent === "Notifications") {
      return <h1> Notifications</h1>;
    }
  };

  render() {
    return (
      <div class="row">{this.renderBottomComponent()}</div>
    );
  }
}

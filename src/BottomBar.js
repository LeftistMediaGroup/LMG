import { Button, THEME_ID } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import Music from "./basic/home/Music.js";
import Chat from "./basic/dashboard/chat/Chat.js";
import RSS from "./basic/dashboard/RSS/RSS.js";

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      RSSFeed: [],
      activeMessages: {},
      avatarLink: "",
      allUsers: { testUser: { username: this.props.username } },
    };
  }

  getReturnedUsers = (data) => {
    for (user in this.state.allUsers) {
      if (`${user.username}`.startsWith(data)) {
        this.setState({
          returnedContacts: (this.state.returnedContacts[user.username] = user),
        });
      } else {
        console.log(`Data: ${data}: not found in ${user.username}`);
      }
    }
  };

  returnFeed = (feed) => {
    this.setState({ RSSFeed: feed });
  };

  getActiveMessages = (Messages) => {
    this.setState({ activeMessages: Messages });
  };

  getAvatarLink = (link) => {
    this.setState({ avatarLink: link });
  };

  renderBottomComponent = () => {
    if (this.props.BottomBarComponent === "Music") {
      return <Music />;
    } else if (this.props.BottomBarComponent === "Messages") {
      return (
        <Chat
          username={this.props.username}
          getActiveMessages={this.getActiveMessages}
          activeMessages={this.state.activeMessages}
          avatarLink={this.state.avatarLink}
          getAvatarLink={this.getAvatarLink}
          getReturnedUsers={this.getReturnedUsers}
        />
      );
    } else if (this.props.BottomBarComponent === "RSS") {
      return <RSS returnFeed={this.returnFeed} RSSFeed={this.state.RSSFeed} />;
    } else if (this.props.BottomBarComponent === "Notifications") {
      return <h1> Notifications</h1>;
    }
  };

  render() {
    return (
      <div class="row" style={{ margin: 0 }}>
        {this.renderBottomComponent()}
      </div>
    );
  }
}

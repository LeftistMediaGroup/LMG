import React, { Component } from "react";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Card, CardContent } from "@mui/material";
import axios from "axios";

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDiscussions: false,
      showMessages: true,
      Messages: [],
    };

    this.showDiscussions = this.showDiscussions.bind(this);
    this.showMessages = this.showMessages.bind(this);
  }

  getMessages = () => {
    axios
      .get(`http://localhost:3001/messages/get_messages`, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(`Axios update: ${JSON.stringify(result, null, 2)}`);
        this.setState({ Messages: result });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  collapseSidebar() {}

  showDiscussions() {
    this.setState({
      showDiscussions: !this.state.showDiscussions,
    });
  }

  showMessages() {
    this.setState({
      showMessages: !this.state.showMessages,
    });
  }

  Messages() {
    return (
      <div class="col grid-margin ">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between">
              <h4 class="card-title">Messages</h4>

              <p class="text-muted mb-1 small">View all</p>
            </div>

            <div class="preview-list">
              <div class="preview-item border-bottom">
                <div class="preview-thumbnail"></div>

                <div class="preview-item-content d-flex flex-grow">
                  <div class="flex-grow">
                    <div class="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 class="preview-subject">Leonard</h6>

                      <p class="text-muted text-small">5 minutes ago</p>
                    </div>

                    <p class="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>

              <div class="preview-item border-bottom">
                <div class="preview-thumbnail"></div>

                <div class="preview-item-content d-flex flex-grow">
                  <div class="flex-grow">
                    <div class="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 class="preview-subject">Luella Mills</h6>

                      <p class="text-muted text-small">10 Minutes Ago</p>
                    </div>

                    <p class="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>

              <div class="preview-item border-bottom">
                <div class="preview-thumbnail"></div>

                <div class="preview-item-content d-flex flex-grow">
                  <div class="flex-grow">
                    <div class="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 class="preview-subject">Ethel Kelly</h6>

                      <p class="text-muted text-small">2 Hours Ago</p>
                    </div>
                    <p class="text-muted">Please review the tickets</p>
                  </div>
                </div>
              </div>

              <div class="preview-item border-bottom">
                <div class="preview-thumbnail"></div>

                <div class="preview-item-content d-flex flex-grow">
                  <div class="flex-grow">
                    <div class="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 class="preview-subject">Herman May</h6>

                      <p class="text-muted text-small">4 Hours Ago</p>
                    </div>

                    <p class="text-muted">
                      Thanks a lot. It was easy to fix it .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div class="row">
            <div class="col-md grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div
                    id="app"
                    style={({ height: "100vh" }, { display: "flex" })}
                  >
                    <Sidebar style={{ height: "100vh" }}>
                      <Menu>
                        <MenuItem
                          icon={<MenuOutlinedIcon />}
                          onClick={() => {
                            this.collapseSidebar();
                          }}
                          style={{ textAlign: "center" }}
                        >
                          Discussions & Messages
                        </MenuItem>

                        <MenuItem
                          icon={<HomeOutlinedIcon />}
                          onClick={() => {
                            this.showDiscussions();
                          }}
                        >
                          Discussions
                        </MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon />}>
                          New Discussion
                        </MenuItem>

                        <MenuItem
                          icon={<PeopleOutlinedIcon />}
                          onClick={() => {
                            this.showMessages();
                          }}
                        >
                          Messages
                        </MenuItem>

                        <MenuItem icon={<ContactsOutlinedIcon />}>
                          Contacts
                        </MenuItem>
                      </Menu>
                    </Sidebar>
                    <main>
                      {this.state.showDiscussions && (
                        <div class="col grid-margin ">
                          <div class="card">
                            <div class="card-body">
                              <h3> End of Discussions </h3>
                              <p>
                                {" "}
                                Ask a question or post a new topic to discuss{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {this.state.showMessages && this.Messages()}
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Chat;

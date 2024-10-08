import { CenterFocusStrong } from "@mui/icons-material";
import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderAccount = () => {
    if (this.props.is_loggedin === true) {
      return (
        <Button
          onClick={() => {
            if (this.state) {
              this.props.getComponent("Dashboard");
            }
          }}
        >
          Dashboard
        </Button>
      );
    } else {
      return (
        <>
          <div class="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("SignUp");
                }
              }}
            >
              {" "}
              SignUp
            </Button>
          </div>

          <div class="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("LogIn");
                }
              }}
            >
              {" "}
              Login
            </Button>
          </div>
        </>
      );
    }
  };

  renderSystem = () => {
    if (this.props.is_database_found === false) {
      return (
        <div class="row ">
          <Button
            onClick={() => {
              if (this.state) {
                this.props.getComponent("System");
              }
            }}
          >
            System
          </Button>
        </div>
      );
    } else if (this.props.is_database_found === true) {
      if (this.props.is_admin_created === true) {
        return (
          this.renderAccount()
        )
      } else if (this.props.is_admin_created === false) {
        return (
          <div class="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("RegisterAdmin");
                }
              }}
            >
              Register Admin
            </Button>
          </div>
        )

      }
    }

  };

  renderAdminDashboard = () => {
    if (this.props.is_admin === true) {
      return (
        <div class="row ">
          <Button
            onClick={() => {
              if (this.state) {
                this.props.getComponent("AdminDashboard");
              }
            }}
          >
            Admin Dashboard
          </Button>
        </div>
      );
    }
  };

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div class="row">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("Home");
                }
              }}
            >
              {" "}
              Home
            </Button>
          </div><div class="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("Education");
                }
              }}
            >
              Education
            </Button>
          </div><div class="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("Music");
                }
              }}
            >
              Music
            </Button>
          </div>

          <div className="row ">
            <Button
              onClick={() => {
                if (this.state) {
                  this.props.getComponent("Resources");
                }
              }}
            >
              Resources
            </Button>
          </div>

          {this.renderAdminDashboard()}

          <Card variant="outlined">
            <CardContent>
              <div class="row-centered" style={{ textAlign: "center" }}>
                Wade

                {this.renderSystem()}
              </div>
            </CardContent>

          </Card>
        </CardContent>
      </Card>
    );
  }
}

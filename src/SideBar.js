import { Button } from "@mui/material";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(`Props SideBar: ${JSON.stringify(this.props, null, 2)}`)
  }

  returnComponent = (component) => {
    this.props.getComponent(component);
  };

  renderAccount = () => {
    if (this.props.admin_created === false) {
      if (this.props.is_loggedin === true) {
        return (
          <Button
            onClick={() => {
              if (this.state) {
                this.returnComponent("Account");
              }
            }}
          >
            Account
          </Button>
        );
      } else {
        return (
          <>
            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("SignUp");
                }
              }}
            >
              {" "}
              SignUp
            </Button>
            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("LogIn");
                }
              }}
            >
              {" "}
              Login
            </Button>
          </>
        );
      }
    } else {
      return (
        <Button
          onClick={() => {
            if (this.state) {
              this.returnComponent("RegisterAdmin");
            }
          }}
        ></Button>
      );
    }
  };

  render() {
    return (
      <div className="sidebar">
        <BrowserView>
          <div>
            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("Home");
                }
              }}
            >
              {" "}
              Home
            </Button>

            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("Education");
                }
              }}
            >
              Education
            </Button>

            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("Resources");
                }
              }}
            >
              Resources
            </Button>

            {this.renderAccount()}
          </div>
        </BrowserView>

        <MobileView>
          <div>
            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("Home");
                }
              }}
            >
              {" "}
              Home
            </Button>

            <Button
              onClick={() => {
                if (this.state) {
                  this.returnComponent("Education");
                }
              }}
            >
              Education
            </Button>

            {this.renderAccount()}
          </div>
        </MobileView>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { Button, Card, CardContent } from "@mui/material";
import { io } from "socket.io-client";



export class Register_Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cause: null,
      organization: null,
      admin_name: null,
      password: null,
      password2: null,
      socket: io("ws://localhost:5501")

    };
  }

  submit = () => {
    console.log(`Submit`);

    if (this.state.password === this.state.password2 && this.state.password !== null) {
      let cause = this.state.cause;
      let organization = this.state.organization;
      let admin_name = this.state.admin_name;
      let admin_pass = this.state.password;

      console.log(`Data out`);

      this.state.socket.emit("register_admin", {
        cause: cause,
        organization: organization,
        admin_name: admin_name,
        admin_pass: admin_pass
      })

    } else {
      console.log("Passwords Error, please try again.");
    }
  };

  causeChange(event) {
    let cause = event.target.value;

    if (cause !== this.state.cause) {
      this.setState({
        cause: cause,
      });
    }
  }

  organizationChange(event) {
    let organization = event.target.value;

    if (organization !== this.state.organization) {
      this.setState({
        organization: organization,
      });
    }
  }

  admin_nameChange(event) {
    let admin_name = event.target.value;

    if (admin_name !== this.state.admin_name) {
      this.setState({
        admin_name: admin_name,
      });
    }
  }

  passwordChange(event) {
    let password = event.target.value;

    if (password !== this.state.password) {
      this.setState({
        password: password,
      });
    }
  }

  password2Change(event) {
    let password2 = event.target.value;

    if (password2 !== this.state.password2) {
      this.setState({
        password2: password2,
      });
    }
  }



  render() {
    return (
      <div className="row-centered" style={{ maxWidth: 500 }}>
        <Card>
          <CardContent>
            <h5>Register - Admin</h5>

            <h4>Enter Manifest Details</h4>


            <form className="row-centered" style={{ color: "black" }}>
              <Form.Group>
                <Form.Control
                  type="cause"
                  id="Inputcause"
                  placeholder="Cause"
                  onChange={this.causeChange.bind(this)}
                />
              </Form.Group>

              <Form.Control
                id="Inputorganization"
                placeholder="Organization"
                onChange={this.organizationChange.bind(this)}
              />

              <Form.Control
                id="Inputadmin_name"
                placeholder="Admin Name"
                onChange={this.admin_nameChange.bind(this)}
              />

              <Form.Group>
                <Form.Control
                  type="password"
                  id="InputPassword"
                  placeholder="Password"
                  onChange={this.passwordChange.bind(this)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="InputConfirmPassword"
                  placeholder="Enter Password Again"
                  onChange={this.password2Change.bind(this)}
                />
              </Form.Group>

              <br />

              <Button
                color="primary"
                variant="outlined"
                onClick={() => {
                  console.log("Clicked!");
                  this.submit();
                }}
                role="button"
                tabIndex={0}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Register_Admin;

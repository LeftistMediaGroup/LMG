import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent } from "@mui/material";

import { socket } from "../../system/System";


export default class Register_Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cause: "",
      organization: "",
      admin_name: "",
      password: "",
      short_pass: "",
      pass_error: false,
      ready: null,
    };
  }

  submit_manifest = () => {
    console.log(`Submit Manifest Pass`);
    if (this.state.short_pass === this.state.manifest_pass_out) {
      let data_out = {
        cause: this.state.cause,
        organization: this.state.organization,
        admin_name: this.state.admin_name,
        admin_pass: this.state.short_pass
      }

      console.log(JSON.stringify(data_out))

      socket.emit("manifest_init", data_out);

    } else {
      //this.set_pass_error(true);
    }
  }


  set_pass_error = (result) => {
    this.setState({ pass_error: result })
  }

  render_pass_error = () => {
    if (this.state.pass_error) {
      return (
        <Card>
          <CardContent>
            <h1>INCORRECT PASSWORD</h1>
          </CardContent>
        </Card>
      )
    }
  }

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

  manifest_passChange(event) {
    let pass = event.target.value;

    this.setState({
      manifest_pass_out: pass,
    })
  }

  watch_socket = () => {
    socket.on("encrypt_admin", (short_pass) => {
      console.log(`Short: ${short_pass}`);
      this.setState({ short_pass: short_pass });
    });
  }

  render_register = () => {
    if (this.state.ready === null) {
      return (
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

              <br />

              <Button
                color="primary"
                variant="outlined"
                onClick={() => {
                  console.log("Clicked!");
                  this.setState({ ready: true })
                  socket.emit("Encrypt")
                }}
                role="button"
                tabIndex={0}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      )
    } else {
      return (
        <Card>
          <CardContent>
            <h1>Admin Pass</h1>

            <p>To Register:</p>

            <ul>
              <li>1. WRITE DOWN password in SECURE place</li>
              <li>2. Enter and submit password </li>
              <li>3. Log in with password</li>
            </ul>

            <Accordion>
              <AccordionSummary>
                SHOW PASSWORD
              </AccordionSummary>

              <AccordionDetails>
                <p>{this.state.short_pass}</p>
                <br />

                <Card>
                  <CardContent>
                    <form className="row-centered" style={{ color: "black" }}>
                      <Form.Group>
                        <Form.Control
                          type="manifest_pass"
                          id="Inputcause"
                          placeholder="Enter Above Password"
                          onChange={this.manifest_passChange.bind(this)}
                        />
                      </Form.Group>
                      <br />

                      <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => {
                          this.submit_manifest();
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        Submit
                      </Button>
                    </form>
                    <br />

                    {this.render_pass_error()}
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      )
    }
  }

  render() {
    return (
      <>
        {this.render_register()}
        {this.watch_socket()}
      </>
    )
  }
}
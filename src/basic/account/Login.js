import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      password2: null,
    };
  }

  submit = () => {
    console.log(`Submit`);

    if (this.state.password === this.state.password2) {
      let username = this.state.username;
      let password = this.state.password;

      console.log(`Data out`);

      axios.defaults.withCredentials = true
      
      axios
        .put("https://localhost-0.tail5cd89.ts.net/system/login", {
          username: username,
          password: password,
        },{ withCredentials: true })
        .then((result) => {
          console.log(`Login update: ${JSON.stringify(result)}`);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    } else {
      console.log("Passwords don't match, please try again.");
    }
  };

  usernameChange(event) {
    let username = event.target.value;

    if (username !== this.state.username) {
      this.setState({
        username: username,
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
      <div className="row-centered">
        <div className="row-centered">
          <div className="page-header">
            <h5>Log in</h5>

            <p>
              Leftist Media Group is recruiting for volunteers to spread
              revolutionary propaganda.
            </p>
          </div>
          <div className="row-centered" style={{ maxWidth: 500 }}>
            <Card>
              <CardContent>
                <form className="row-centered">
                  <Form.Group>
                    <label htmlFor="Inputusername">username</label>
                    <Form.Control
                      type="username"
                      id="Inputusername"
                      placeholder="username"
                      onChange={this.usernameChange.bind(this)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control
                      type="password"
                      id="InputPassword"
                      placeholder="Password"
                      onChange={this.passwordChange.bind(this)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="InputConfirmPassword">
                      Confirm Password
                    </label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="InputConfirmPassword"
                      placeholder="Password"
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
        </div>
      </div>
    );
  }
}

export default Login;

import { Button, Card, CardContent } from "@mui/material";
import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

export default class RSS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SongLibrary: [],
      urls: [],
      queue: [],
      RSSRaw: [],
    };
  }

  getFeed = () => {
    axios
      .get(`https://localhost-0.tail5cd89.ts.net/rss/get_rss`, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(`Axios update: ${JSON.stringify(result, null, 2)}`);
        this.setState({ RSSRaw: result });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  componentDidMount() {
    this.getFeed();
  }

  render() {
    let feed = this.state.RSSRaw.map((story) => (
      <div class="col">
        <Card>
          <CardContent>
            <Card>
              <CardContent>
                <h5>{story.Title}</h5>

                <br />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    ));

    return (
      <div class="container">
        <Card>
          <CardContent>
            <h1> RSS </h1>

            <div className="col">
              <Card>
                <CardContent>
                  <h4>Feed</h4>

                  <Card>
                    <CardContent>
                      <div class="row">{feed}</div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

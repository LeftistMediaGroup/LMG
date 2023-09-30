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
    };
  }

  getFeed() {
    axios
        .put(
          `https://localhost-0.tail5cd89.ts.net/rss/get_rss`,
          {
            password: password,
            email: email,
          },
          { withCredentials: true }
        )
        .then((result) => {
          console.log(`Axios update: ${JSON.stringify(result, null, 2)}`);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
  }

  render() {
    let Feed = [];

    let feed = Object.values(Feed).map((song) => (
      <div class="col">
        <Card>
          <CardContent>
            <Card>
              <CardContent>
                <h5>{song.Title}</h5>

                <Button>Play</Button>
                <br />

                <Button
                  onClick={(song) => {
                    this.state.queue.push(song.Title);
                  }}
                >
                  Add to queue
                </Button>
                <br />

                <p> Song Info </p>
                <p> {song.Artist}</p>
                <p>Song Summary</p>
                <p>{song.Summary}</p>
                <p>
                  Lyrics:
                  <br />
                  Coming soon
                </p>
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

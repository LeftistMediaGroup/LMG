import { Button, Card, CardContent } from "@mui/material";
import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

import ReactPlayer from "react-player/lazy";

import Library from "./Library/Library.json";

export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Library: [],
      urls: [],
      queue: [],
    };
  }

  getUrls(song) {
    return song.URL;
  }

  songCard(song, SongLibrary) {
    SongLibrary.push(
      <>
        <Card>
          <CardContent>
            <h4>Player</h4>
            <br />
            <ReactPlayer url={this.state.urls} />
            <Card>
              <CardContent>
                <h1>{song.Title}</h1>
                Buttons Don't work yet
                <Button>Play {song.Title} Now</Button>
                <Button
                  onClick={(song) => {
                    this.state.queue.push(song.Title);
                  }}
                >
                  Add {song.Title} to queue
                </Button>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="btn btn-primary"
                    id="dropdownMenuButton1"
                  >
                    Song Info
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>{song.Title}</Dropdown.Header>

                    <Dropdown.Item>
                      Song Summary: <br />
                      {song.Summary}
                    </Dropdown.Item>

                    <Dropdown.Item>
                      {" "}
                      Lyrics: <br />
                      Coming soon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </>
    );
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1> Music </h1>

          <Card>
            <CardContent>
              <h4>Library</h4>
              {this.state.SongLibrary}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  }
}

export default Music;

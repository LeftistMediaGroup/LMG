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
  };

  getLibrary = () => {
    for (song of Library) {
      console.log(`Song: ${song.Title}`)
    };
  };

  songCard(song, SongLibrary) {
    SongLibrary.push(
      <>
        <Card>
          <CardContent>
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

          <h4>Player</h4>
          <br />
          <ReactPlayer
            width="100%"
            height="10%"
            controls
            light
            url={`${process.env.Wade_Host}/vidChunk?id=Fuck_the_Cistem`}
          />
          <Card>
            <CardContent>
              <h4>Library</h4>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  }
}

export default Music;

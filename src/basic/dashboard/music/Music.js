import { Button, Card, CardContent } from "@mui/material";
import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

import ReactPlayer from "react-player/lazy";

import Library from "./Library/Library.json";

export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SongLibrary: [],
      urls: [],
      queue: [],
    };
  }

  getUrls(song) {
    return song.URL;
  }

  render() {
    let cards = Object.values(Library).map((song) => (
      <div class="col-sm-auto">
        <Card>
          <CardContent>
            <Card>
              <CardContent>
                <h4>{song.Title}</h4>

                <Button>Play {song.Title} Now</Button>
                <br />

                <Button
                  onClick={(song) => {
                    this.state.queue.push(song.Title);
                  }}
                >
                  Add {song.Title} to queue
                </Button>
                <br />

                <p> Song Info </p>
                <p> {song.Artist}</p>

                <p>
                  Song Summary
                  {song.Summary}
                </p>
                <br />

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

                <Card>
                  <CardContent>{cards}</CardContent>
                </Card>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Music;

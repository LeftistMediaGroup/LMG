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

  songCards() {
    let cards = Object.values(Library).map((song) => {
      return (
        <>
          <Card>
            <CardContent>
              <Card>
                <CardContent>
                  <h1>{song.Title}</h1>

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
                  <br />

                  <p>
                    Song Summary: <br />
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
        </>
      );

      this.setState({ SongLibrary: cards });
    });
  }

  componetDidMount() {
    this.songCards();
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

              <Card>
                <CardContent>{this.state.SongLibrary}</CardContent>
              </Card>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  }
}

export default Music;

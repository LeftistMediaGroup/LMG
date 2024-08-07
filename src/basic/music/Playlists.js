import React, { Component } from "react";

import { Button, Card, CardContent } from "@mui/material";

export default class Playlists extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const songsList = Object.values(this.props.playlist).map((song) => <li key={song.Name} class="songCard">
      <Button
        onClick={() => {
          if (this.state) {
            this.props.returnSong(song);
          }
        }}
      >
        {song.Name}
        <br />
        <img
          src={`https://customer-8dwfpc3bffzxtifb.cloudflarestream.com/${song.url}/thumbnails/thumbnail.jpg?time=1s&height=100`}
        >
        </img>
      </Button>
    </li>);


    return (
      <div class="row">
        <Card>
          <CardContent>
            <h1>Playlist</h1>

            <Card>
              <CardContent>
                <p>
                  {songsList}
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }
}

import React, { Component } from "react";

import { Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import RevolutionTelevision from "./RevolutionTelevision";
import { auto } from "@popperjs/core";

import SpotifyPlayer from 'react-spotify-player';



// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'



export default class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
      song: null,
      queue: [],
      queueCount: 0,
      queuePosition: 0
    };

    this.GetActiveMusic();
  }

  GetActiveMusic = () => {
    axios
      .get(`https://${process.env.host}/Music/get_active`, { withCredentials: true })
      .then((result) => {
        this.setState({ songs: result.data })
      });
  }

  componentDidMount() {
    this.GetActiveMusic();
  }

  renderSongs = () => {
    if (this.state.songs !== null) {
      return Object.values(this.state.songs).map((song) => {
        let songPath = song.path.split("Vault-1")[1]
        let art = songPath.replace("Music", "AlbumArt")
        return (
          <div >
            <Card variant="outlined">
              <CardContent>
                {song.name}
                <br />
                <div class="row">
                  <div class="col" style={{ maxWidth: 82 }}>
                    <img
                      src={`${process.env.broadcast}${art}.jpeg`}
                      alt="Album Art"
                      style={{
                        height: 80,
                        width: 80,
                      }}
                    />
                  </div>
                  <div class="col" style={{ maxWidth: 70 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        let queue = this.state.queue;

                        queue.push(song);
                        this.setState({ queue: queue });

                        this.setState({
                          song: {
                            name: song.name,
                            url: songPath,
                            art: art
                          }
                        })
                      }}
                    >
                      Play
                    </Button>
                  </div>
                  <div class="col" style={{ maxWidth: 170 }}>

                    <Button variant="contained" color="primary"
                      onClick={() => {
                        let queue = this.state.queue;

                        queue.push(song);
                        this.setState({ queue: queue });

                        console.log(`Queue: ${JSON.stringify(this.state.queue, null, 2)}`)
                      }}
                    >
                      Add to queue
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  renderQueue = () => {
    if (this.state.queue !== null) {
      return Object.values(this.state.queue).map((song) => {
        let songPath = song.path.split("Vault-1")[1]
        let art = songPath.replace("Music", "AlbumArt")
        return (
          <div >
            <Card variant="outlined">
              <CardContent>
                {song.name}
                <br />
                <img
                  src={`${process.env.broadcast}${art}.jpeg`}
                  alt="Album Art"
                  style={{
                    height: 80,
                    width: 80,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.setState({
                      song: {
                        name: song.name,
                        url: songPath,
                        art: art
                      }
                    })
                  }}
                >
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      });
    } else {
      return <div>No Queue</div>;
    }
  }

  renderQueueCount = () => {
    let queueCount = 0

    if (this.state.queue !== null) {
      Object.values(this.state.queue).forEach((song) => {
        queueCount++
      })

      return <div>Queue size: {queueCount}</div>;
    } else {
      return <div>No Queue</div>;
    }
  }

  NextSong = () => {
    let queuePosition = this.state.queuePosition++

    console.log(`Queue position ${this.state.queuePosition}`)

    this.setState({ queuePosition: queuePosition })
    this.setState({
      song: {
        name: this.state.queue[queuePosition].name,
        url: this.state.queue[queuePosition].path.split("Vault-1")[1],
        art: this.state.queue[queuePosition].path.split("Vault-1")[1].replace("Music", "AlbumArt")
      }
    })
  }

  PrevSong = () => {
    let queuePosition = this.state.queuePosition - 1

    console.log(`Queue position ${this.state.queuePosition}`)
    this.setState({ queuePosition: queuePosition })
    this.setState({
      song: {
        name: this.state.queue[queuePosition].name,
        url: this.state.queue[queuePosition].path.split("Vault-1")[1],
        art: this.state.queue[queuePosition].path.split("Vault-1")[1].replace("Music", "AlbumArt")
      }
    })
  }

  renderStartRestart = () => {
    if (Object.values(this.state.queue).length !== 0) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(`Queue: ${JSON.stringify(this.state.queue, null, 2)}`)

            this.setState({
              song: {
                name: this.state.queue[0].name,
                url: this.state.queue[0].path.split("Vault-1")[1],
                art: this.state.queue[0].path.split("Vault-1")[1].replace("Music", "AlbumArt")
              }
            })
            this.setState({ queuePosition: 1 })
          }}
        >
          Play / Restart Queue
        </Button>
      )
    }
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="page-header">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="!#" onClick={(event) => event.preventDefault()}>
                    LMG
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Leftism Through Music
                </li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col">

              <h3 className="page-title my-3">Leftism Through Music</h3>

              <p>120+ leftist songs</p>

              <div class="row">
                <div class="col mx-auto" align="center">

                  <SpotifyPlayer
                    uri="https://open.spotify.com/playlist/0Of0TS1QSKmeb7G8DrR40x?si=8d75011cd7ee427f"
                    size={{
                      width: '50%',
                      height: 700,
                    }}
                    view={'list'}
                    theme={'black'}
                  />
                </div>
              </div>
            </div>
          </div>


          {/*

          <div className="row">
            <div className="col">
              <RevolutionTelevision
                song={this.state.song}
                NextSong={this.NextSong}
                PrevSong={this.PrevSong}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">

              <h1>Queue</h1>
              <br />

              {this.renderStartRestart()}
              <br />
              <br />

              {this.renderQueueCount()}
            </div>

            <div className="col s12" style={{ overflow: auto, height: 200 }}>
              {this.renderQueue()}
            </div>
          </div>

          <div className="row">
            <div className="col">
              Playlist
              <br />
            </div>

            <div className="col s12" style={{ overflow: auto, height: 400 }}>
              {this.renderSongs()}
            </div>
          </div>

          */}
        </CardContent>
      </Card>
    );
  }
}
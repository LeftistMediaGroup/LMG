import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";

import { jsonrepair } from "jsonrepair";

import { Dropdown } from "react-bootstrap";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

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
      .get(`http://localhost:3001/rss_out/get_rss`, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(`Axios update: ${JSON.stringify(result.data, null, 2)}`);

        this.props.returnFeed(
          result.data.map((story) => (
            <div class="row">
              <Card variant="outlined">
                <CardContent>
                  <Card>
                    <CardContent>
                      <p> {JSON.stringify(story.doc.title, null, 2)} </p>

                      <div>{ReactHtmlParser(story.doc.body)}</div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          ))
        );
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  componentDidMount() {
    this.getFeed();
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1> RSS </h1>

          <div className="col">
            <Card>
              <CardContent>
                <h4>Feed</h4>

                <Card>
                  <CardContent>
                    <div class="row">{this.props.RSSFeed}</div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    );
  }
}

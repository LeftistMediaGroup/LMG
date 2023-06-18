import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import SignUpForm from "../SignUpForm";

export class Volunteering extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Landing </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Volunteering
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Positions & Signup
              </li>
            </ol>
          </nav>
        </div>

        <div className="proBanner">
          <div>
            <span className="d-flex align-items-center purchase-popup">
              <p>Sign up to volunteer with us!</p>
              <a
                href="leftistmediagroup.com/volunteering"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm purchase-button ml-auto"
              >
                Volunteer Now
              </a>
              <i
                className="mdi mdi-close bannerClose"
                onClick={this.toggleProBanner}
              ></i>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-5 col-sm-7 col-xl-8 p-0">
                    <h4 className="mb-1 mb-sm-0">
                      Lets Overthrow Capitalism together
                    </h4>

                    <p className="mb-0 font-weight-normal d-none d-sm-block">
                      {" "}
                      The goal of overthrowing Capitalism will require many
                      subtasks, as the only way to defeat it is through the
                      power of love, or in other words, a multifaceted attack
                      from every angle possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Volunteering</h4>

              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Positions Available</h4>

                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-row justify-content-between">
                            <h4 className="card-title mb-1">Projects</h4>

                            <p className="text-muted mb-1">
                              All Projects need volunteers
                            </p>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <div className="preview-list">
                                <div className="preview-item border-bottom">
                                  <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                      <i className="mdi mdi-file-document"></i>
                                    </div>
                                  </div>

                                  <div className="preview-item-content d-sm-flex flex-grow">
                                    <div className="flex-grow">
                                      <h6 className="preview-subject">
                                        LMG - Memes
                                      </h6>
                                      <p className="text-muted mb-0">
                                        LMG - Memes is a facebook page that
                                        shares leftist propaganda.
                                      </p>
                                    </div>

                                    <div className="col-md-8 grid-margin stretch-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <div className="d-flex flex-row justify-content-between">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="btn btn-primary"
                                                id="dropdownMenuButton1"
                                              >
                                                Positions Available
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Header>
                                                  Positions & Information
                                                </Dropdown.Header>
                                                <Dropdown.Divider />

                                                <Dropdown.Item>
                                                  <Dropdown.Header>
                                                    Meme Distributer
                                                  </Dropdown.Header>
                                                  Browse and share Leftist Memes
                                                  on a dedicated Facebook page{" "}
                                                  <br />
                                                  Time Requirement: <br />
                                                  1 Hour a week <br />
                                                  Position Requirements: <br />
                                                  Experience with Facebook{" "}
                                                  <br />
                                                  Preferred - Experience with
                                                  Facebook Pages
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                      <p className="text-muted">0 volunteers</p>
                                      <p className="text-muted mb-0">? Tasks</p>
                                      <p className="text-muted">? Issues</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="preview-list">
                                  <div className="preview-item border-bottom">
                                    <div className="preview-thumbnail">
                                      <div className="preview-icon bg-primary">
                                        <i className="mdi mdi-file-document"></i>
                                      </div>
                                    </div>

                                    <div className="preview-item-content d-sm-flex flex-grow">
                                      <div className="flex-grow">
                                        <h6 className="preview-subject">
                                          LMG for social media
                                        </h6>
                                        <p className="text-muted mb-0">
                                          New social media site
                                        </p>
                                      </div>

                                      <Dropdown>
                                        <Dropdown.Toggle
                                          variant="btn btn-primary"
                                          id="dropdownMenuButton1"
                                        >
                                          Positions Available
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Header>
                                            Positions & Information
                                          </Dropdown.Header>
                                          <Dropdown.Divider />

                                          <Dropdown.Item>
                                            <Dropdown.Header>
                                              Social Media Manager
                                            </Dropdown.Header>
                                            Build and refine the online presence
                                            of LeftistMediaGroup.org <br />
                                            Time Requirement: <br />
                                            1 Hour a week <br />
                                            Preferred Experience: <br />
                                            Facebook, Instagram, Reddit, Media
                                            Trends, Brand Building, or social
                                            media managing
                                            <br />
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>

                                      <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                        <p className="text-muted">
                                          0 volunteers
                                        </p>
                                        <p className="text-muted mb-0">
                                          ? Tasks{" "}
                                        </p>
                                        <p className="text-muted">? Issues</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="preview-list">
                                    <div className="preview-item border-bottom">
                                      <div className="preview-thumbnail">
                                        <div className="preview-icon bg-primary">
                                          <i className="mdi mdi-file-document"></i>
                                        </div>
                                      </div>

                                      <div className="preview-item-content d-sm-flex flex-grow">
                                        <div className="flex-grow">
                                          <h6 className="preview-subject">
                                            Sophia
                                          </h6>
                                          <p className="text-muted mb-0">
                                            Ask Leftist questions to be
                                            answered, discussed, or debated.{" "}
                                          </p>
                                        </div>

                                        <Dropdown>
                                          <Dropdown.Toggle
                                            variant="btn btn-primary"
                                            id="dropdownMenuButton1"
                                          >
                                            Positions Available{" "}
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Header>
                                              Positions & Information
                                            </Dropdown.Header>
                                            <Dropdown.Divider />

                                            <Dropdown.Item>
                                              <Dropdown.Header>
                                                Node js Programer
                                              </Dropdown.Header>
                                              Work in Node js to build the
                                              backend for LeftistMediaGroup.org.{" "}
                                              <br />
                                              Design and implement Wade
                                              components into website backend.
                                              Time Requirement: <br />
                                              1 Hour a week <br />
                                              Position Requirements: <br />
                                              Experience with Node js, Python or
                                              C <br />
                                              Preferred - Experience with front
                                              and backend development
                                            </Dropdown.Item>

                                            <Dropdown.Item>
                                              <Dropdown.Header>
                                                React Programer
                                              </Dropdown.Header>
                                              Work in React to build the
                                              frontend Sophia component for
                                              LeftistMediaGroup.org <br />
                                              Time Requirement: <br />
                                              1 Hour a week <br />
                                              Position Requirements: <br />
                                              Experience with React, CSS, HTML,
                                              or Node js Preferred - Experience
                                              with front and backend development
                                            </Dropdown.Item>

                                            <Dropdown.Item></Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>

                                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                          <p className="text-muted">
                                            0 volunteers
                                          </p>
                                          <p className="text-muted mb-0">
                                            ? Tasks{" "}
                                          </p>
                                          <p className="text-muted">? Issues</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="preview-item border-bottom">
                                      <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                          <i className="mdi mdi-cloud-download"></i>
                                        </div>
                                      </div>

                                      <div className="preview-item-content d-sm-flex flex-grow">
                                        <div className="flex-grow">
                                          <h6 className="preview-subject">
                                            Wade
                                          </h6>
                                          <p className="text-muted mb-0">
                                            Community response system made to
                                            assist with the development, design,
                                            and organization of protests.
                                          </p>
                                        </div>

                                        <Dropdown>
                                          <Dropdown.Toggle
                                            variant="btn btn-primary"
                                            id="dropdownMenuButton1"
                                          >
                                            Positions Available{" "}
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Header>
                                              Positions & Information
                                            </Dropdown.Header>
                                            <Dropdown.Divider />

                                            <Dropdown.Item>
                                              <Dropdown.Header>
                                                Node js Programer
                                              </Dropdown.Header>
                                              Work in Node js to build the
                                              backend for LeftistMediaGroup.org.{" "}
                                              <br />
                                              Design and implement Wade
                                              components into website backend.
                                              Time Requirement: <br />
                                              1 Hour a week <br />
                                              Position Requirements: <br />
                                              Experience with Node js, Python or
                                              C <br />
                                              Preferred - Experience with front
                                              and backend development
                                            </Dropdown.Item>

                                            <Dropdown.Item></Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>

                                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                          <p className="text-muted">
                                            0 Volunteers
                                          </p>
                                          <p className="text-muted mb-0">
                                            ? Tasks{" "}
                                          </p>
                                          <p className="text-muted">? Issues</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="preview-item border-bottom">
                                      <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                          <i className="mdi mdi-clock"></i>
                                        </div>
                                      </div>

                                      <div className="preview-item-content d-sm-flex flex-grow">
                                        <div className="flex-grow">
                                          <h6 className="preview-subject">
                                            Leftism Through Music
                                          </h6>

                                          <p className="text-muted mb-0">
                                            This course will provide listeners
                                            with a playlist of 80+ downloadable
                                            leftist songs to listen to and
                                            reflect on centered around leftist
                                            topics.
                                          </p>
                                        </div>

                                        <div className="col-md-8 grid-margin stretch-card">
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="d-flex flex-row justify-content-between">
                                                <h4 className="card-title mb-1">
                                                  Positions Available
                                                </h4>

                                                <br />

                                                <Dropdown>
                                                  <Dropdown.Toggle
                                                    variant="btn btn-primary"
                                                    id="dropdownMenuButton1"
                                                  >
                                                    Positions Available{" "}
                                                  </Dropdown.Toggle>
                                                  <Dropdown.Menu>
                                                    <Dropdown.Header>
                                                      Positions & Information
                                                    </Dropdown.Header>
                                                    <Dropdown.Divider />

                                                    <Dropdown.Item>
                                                      <Dropdown.Header>
                                                        React Programer
                                                      </Dropdown.Header>
                                                      Work in React to build the
                                                      frontend music player
                                                      component for
                                                      LeftistMediaGroup.org{" "}
                                                      <br />
                                                      Time Requirement: <br />
                                                      1 Hour a week <br />
                                                      Position Requirements:{" "}
                                                      <br />
                                                      Experience with React,
                                                      CSS, HTML, or Node js{" "}
                                                      <br />
                                                      Preferred - Experience
                                                      with front and backend
                                                      development
                                                    </Dropdown.Item>

                                                    <Dropdown.Item></Dropdown.Item>
                                                  </Dropdown.Menu>
                                                </Dropdown>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                          <p className="text-muted">
                                            0 Volunteers
                                          </p>
                                          <p className="text-muted mb-0">
                                            ? Tasks{" "}
                                          </p>
                                          <p className="text-muted">? Issues</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SignUpForm />
      </div>
    );
  }
}

export default Volunteering;

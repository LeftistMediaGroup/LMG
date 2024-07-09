import { Card, CardContent } from "@mui/material";
import React, { Component } from "react";

export class TestPage extends Component {
    render() {
      return (
        <Card variant="outlined">
          <CardContent>
            <div className="page-header">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                            Home
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Test Page
                        </li>
                    </ol>
                </nav>
            </div>
            <header className="mt-3">
                <div className="row">
                    <div className="col">

                        <h1>Test Page</h1>
            
                        <h4>What is Revolution?</h4>
            
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus quam, volutpat vel felis nec, molestie eleifend lectus. Morbi placerat sed enim nec ornare. Vivamus.</p>
                    </div>
                </div>
            </header>
  
            <div className="row">
                <div className="col">
                    
                    <Card>
                    <CardContent>
                        <h4> Capitalism - Where we are now</h4>

                        <p>Leading towards next Global Extinction (GE) event.</p>

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card bg-transparent border-danger h-100">
                                    <img src="https://placehold.jp/ff0000/ffffff/320x150.png" className="card-img-top" alt="..." />
                                    <div className="card-header bg-transparent border-danger"><h3 className="card-title text-danger">Buddy System</h3></div>
                                    <div className="card-body  bg-transparent border-danger">
                                        
                                        <p className="card-text text-white">Feeling isolated from all the stressors of capitalism?</p>

                                        <p className="card-text text-white">Need someone to check in on you from time to time?</p>

                                        <p className="card-text text-white">Have the energy to check on someone?</p>

                                        <p className="card-text text-white">Then join the Community Support Network's Buddy System</p>

                                        <p className="card-text text-white">We'll set you up with your buddy, and you'll both figure out the best time to meet, then you can schedule check-in's to see how things are in your life</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-danger">
                                        <small className="text-danger">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent border-danger h-100">
                                    <img src="https://placehold.jp/ff0000/ffffff/320x150.png" className="card-img-top" alt="..." />
                                    <div className="card-header bg-transparent border-danger"><h3 className="card-title text-danger">Support Team</h3></div>
                                    <div className="card-body  bg-transparent border-danger">
                                        <p className="card-text text-white">On those days where you need a hand with something, be it sending a email, or just needing a friend, we offer the Support Team</p>

                                        <p className="card-text text-white">The support team, is a bunch of leftists that volunteer their time to help comrades in need, whatever the situation.</p>

                                        <p className="card-text text-white">Volunteers are trained in compasion, listening, and esculating to admins incase things get beyond their scope.</p>

                                        <p className="card-text text-white">So, whether you're in need of a good vent session, or need an escape from the ever-loving void, let us know, and we'll see what we can do.</p>
                                                                            
                                    </div>
                                    <div className="card-footer bg-transparent border-danger">
                                        <small className="text-danger">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent border-danger h-100">
                                    <img src="https://placehold.jp/ff0000/ffffff/320x150.png" className="card-img-top" alt="..." />
                                    <div className="card-header bg-transparent border-danger"><h3 className="card-title text-danger">Mutual Aid Contacting</h3></div>
                                    <div className="card-body  bg-transparent border-danger">
                                        <p className="card-text text-white">This project involves viturally contacting other Leftist orginizations and building networks of community support.</p>

                                        <p className="card-text text-white">For example, why aren't the farmers talking to the foodbanks, and why aren't mutual aid groups all talking to each other, sharing resources, knowledge and leftist ideology?</p>

                                        <p className="card-text text-white">Mutual Aid Contacting aims to fix these problems. Check out our Resources tab to see the list of orginizations we plan on contacting.</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-danger">
                                        <small className="text-danger">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </CardContent>
                    </Card>
                        
                </div>
            </div>
                

  
            <Card>
              <CardContent>
                <div className="row-centered">
                  <h4> Socialism - Transitionary stage</h4>
  
                  <Card>
                    <CardContent>
                      <div className="row">
                        <div className="col">
                          <p>Government funded social programs</p>
                        </div>
  
                        <div className="col">
                          <p>Self dissolving Government</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
  
            <Card>
              <CardContent>
                <div className="row-centered">
                  <div className="col">
                    <h4>Anarcho Syndicalism - World peace and prosperity</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      );
    }
  }
  
  export default TestPage;
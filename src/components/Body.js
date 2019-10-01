import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchResult extends Component {
    render() {

        return (

            <div className="Body">
                <hr id="hr"></hr>

                <div id="container">
                    <Input type="text" name="status" id="input" className="text-center mb-10" placeholder="Search" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="container">
                        <div class="row divide">
                            <div class="row divide ml-3">
                                <i className="fa fa-3x fa-check-circle" style={{ color: "orange" }} />
                            </div>
                            <div class="card" id="carta">
                                <div class="card-body">
                                    <h4>Monday</h4>
                                    <h4>10<sup>th</sup></h4>
                                    <h4>PM</h4>
                                </div>
                            </div>
                            <div class="card" id="carta2">
                                <div class="card-body">
                                    <h4>Houston, TX, 33619</h4>
                                    <i className="fa fa-chevron-down ml-5" style={{ color: "orange" }}></i>
                                    <h4>Atlanta, GA, 30123</h4>
                                </div>
                            </div>
                            <div class="card" id="carta3">
                                <div class="card-body">
                                    <i className="fa fa-4x fa-truck mr-4" style={{ color: "grey" }}></i>
                                    <h7>$250.00</h7>
                                    <i className="fa fa-3x fa fa-file ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa fa-check-square-o ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa-ellipsis-v ml-4" style={{color: "gray"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="container">
                        <div class="row divide">
                            <div class="row divide ml-3">
                                <i className="fa fa-3x fa-check-circle" style={{ color: "orange" }} />
                            </div>
                            <div class="card" id="carta">
                                <div class="card-body">
                                    <h4>Monday</h4>
                                    <h4>10<sup>th</sup></h4>
                                    <h4>PM</h4>
                                </div>
                            </div>
                            <div class="card" id="carta2">
                                <div class="card-body">
                                    <h4>Houston, TX, 33619</h4>
                                    <i className="fa fa-chevron-down ml-5" style={{ color: "orange" }}></i>
                                    <h4>Atlanta, GA, 30123</h4>
                                </div>
                            </div>
                            <div class="card" id="carta3">
                                <div class="card-body">
                                    <i className="fa fa-4x fa-truck mr-4" style={{ color: "grey" }}></i>
                                    <h7>$250.00</h7>
                                    <i className="fa fa-3x fa fa-file ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa fa-check-square-o ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa-ellipsis-v ml-4" style={{color: "gray"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="container">
                        <div class="row divide">
                            <div class="row divide ml-3">
                                <i className="fa fa-3x fa-check-circle" style={{ color: "orange" }} />
                            </div>
                            <div class="card" id="carta">
                                <div class="card-body">
                                    <h4>Monday</h4>
                                    <h4>10<sup>th</sup></h4>
                                    <h4>PM</h4>
                                </div>
                            </div>
                            <div class="card" id="carta2">
                                <div class="card-body">
                                    <h4>Houston, TX, 33619</h4>
                                    <i className="fa fa-chevron-down ml-5" style={{ color: "orange" }}></i>
                                    <h4>Atlanta, GA, 30123</h4>
                                </div>
                            </div>
                            <div class="card" id="carta3">
                                <div class="card-body">
                                    <i className="fa fa-4x fa-truck mr-4" style={{ color: "grey" }}></i>
                                    <h7>$250.00</h7>
                                    <i className="fa fa-3x fa fa-file ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa fa-check-square-o ml-4" style={{ color: "grey" }} />
                                    <i className="fa fa-3x fa-ellipsis-v ml-4" style={{color: "gray"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default SearchResult;

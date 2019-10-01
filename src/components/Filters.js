import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchFilters extends Component {
    render() {
        return (
            <div className="Filters">
                <div className="container">
                    <a className="mt-3"><i class="fa fa-lightbulb-o mr-2"></i>Smart Filters</a>
                    <hr width="80%" />
                    <div>
                        <div class="block">
                            <i class="fa fa-2x fa-tag mr-4" style={{ color: "gray" }} />
                            <label class="switch">
                                <input type="checkbox" style={{ marginBottom: "8px", }}></input>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="block">
                            <i className="fa fa-2x fa-calendar-o mr-4 mt-3" style={{ color: "gray" }}></i>
                            <label class="switch">
                                <input type="checkbox" style={{ marginTop: "8px", }}></input>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="block">
                            <i className="fa fa-2x fa-heart-o mr-4" style={{ color: "gray" }}></i>
                            <label class="switch">
                                <input type="checkbox" style={{ marginBottom: "8px", }}></input>
                                <span class="slider round" ></span>
                            </label>
                        </div>
                    </div>
                    <hr width="80%" />
                    <a for="statusInput" className="font-weight-light">Status</a>
                    <Input type="text" name="status" id="statusInput" className="text-center" placeholder="Search" />
                    <br></br>
                    <button type="button" className="btn btn-light font-weight-light mb-3"><b>DELIVERED</b></button>
                </div>
            </div>
        );
    }
}

export default SearchFilters;

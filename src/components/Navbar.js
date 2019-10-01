import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="Navbar" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }} dark expand="md">
          <NavbarBrand href="/" style={{ color: "white" }}><img src="https://user-images.githubusercontent.com/38144641/65847492-61681c80-e307-11e9-8cdf-0d92a1c7f1d6.JPG" style={{height: "130px"}}></img></NavbarBrand>
          <div className="ml-auto" id="nav">
            <ul class="nav nav-tabs " id="Navbar" role="tablist" style={{ backgroundColor: "white" }}>
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-home mr-2"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-comment mr-2"></i>Messages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa fa-star mr-2"></i>Wishlist</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa-cog mr-2"></i>Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa-user mr-2"></i>My account</a>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

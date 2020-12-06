import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SubNavBar.css';

class SubNavBar extends Component {
  render() {
    if (this.props.selected == "people") {
      return (
        <div>
          <div className="notSelectedBar  selectedBar">
            <Link className="navText" to="/shelterAdminPeople">People</Link>
          </div>
          <div className="notSelectedBar">
          <Link to="/shelterAdminPayments" className="navText">Payments & Financial Info</Link>
          </div>
        </div>
      )
    }
    return(
      <div>
        <div className="notSelectedBar navText">
          <Link className="navText" to="/shelterAdminPeople">People</Link>
        </div>
        <div className="notSelectedBar selectedBar">
          <Link to="/shelterAdminPayments" className="navText">Payments & Financial Info</Link>
        </div>
      </div>
    )
  }
}

export default SubNavBar;

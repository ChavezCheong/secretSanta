import React, {Component} from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import SubNavBar from '../Components/SubNavBar/SubNavBar.js';
import { Button } from 'react-bootstrap';
import GiftsReceived from '../Components/GiftsReceived/GiftsReceived.js';
import {Link, Redirect} from 'react-router-dom';
import './ShelterAdminPayments.css';

class ShelterAdminPayments extends Component {
  render() {
    if (!this.props.uid) {
      return <Redirect to="/"/>;
    }
    return (
      <>
        <NavBar/>
        <SubNavBar selected="payments"/>
        <div className="paymentInfo">
          <p className="headingText">Let's setup your payment infomation</p>
          <div className="toDo">
            TODO Need some banking setup form or connection to Stripe here
          </div>
          <p className="headingText">Gifts received</p>
          <GiftsReceived item="Jacket" person="Jennifer Guo" message="Happy holidays! Enjoy your gift!" money="50"/>
          <br></br>
          <GiftsReceived item="Jacket" person="Jennifer Guo" message="Happy holidays! Enjoy your gift!" money="50"/>
          <br></br>
          <GiftsReceived item="Jacket" person="Jennifer Guo" message="Happy holidays! Enjoy your gift!" money="50"/>
        </div>
      </>
    )
  }
}

export default ShelterAdminPayments;

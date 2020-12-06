import React, { Component } from 'react';
import './ViewProfile.css';
import '../Payments/Payments.css';
import NavBar from '../Components/NavBar/NavBar.js';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import pic0 from './../../Images/snowman.svg';
import pic1 from './../../Images/penguin.svg';
import pic2 from './../../Images/reindeer.svg';
import pic3 from './../../Images/nutcracker.svg';

class ViewProfile extends Component {

  render(){
    const arr = [pic0, pic1, pic2, pic3];
    const rand = Math.floor(Math.random() * Math.floor(4));
    const img = arr[rand];

    return(
      <>
      <NavBar />

        <div className="textDiv">
        <Button variant="light" size="lg"><Link className="cinzel backToProfile" to="/" style={{color: "black"}}>Back</Link></Button>
          <br></br>
          <img src={img} style={{borderRadius: '50%', width: '10em', outline: '2px solid black'}} className="profPic"/>
          <p className="itemTitle">Jennifer Guo</p>
          <p className="profBio">I like to run and stuff. Maybe eat mochi donuts sksksksksk</p>
          <p className="itemTitle">Wishlist</p>
          <Form>
            <Form.Check label={'Jacket'} />
            <Form.Check disabled label={'Shoes someone already bought'} />
          </Form>
          <Button variant="dark" size="lg" className="purchaseButton">Purchase Items</Button>
        </div>
      </>
    )
  }
}

export default ViewProfile;

import React, { Component } from 'react';
import './ViewProfile.css';
import '../Payments/Payments.css';
import NavBar from '../Components/NavBar/NavBar.js';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import {Redirect, Link, withRouter} from 'react-router-dom';
import pic0 from './../../Images/snowman.svg';
import pic1 from './../../Images/penguin.svg';
import pic2 from './../../Images/reindeer.svg';
import pic3 from './../../Images/nutcracker.svg';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

class ViewProfile extends Component {
  constructor(props) {
  super(props);
  //store user account info from text inputs
  this.state = {
    itemName: '',
    itemCost: '',
  };
}

//should receive as props:
//shelter name (this.props.shelterid), userid (this.props.recipientid), (this.props.profile.name), item, cost

//change handler
handleChange = event => {
  this.setState({ itemCost: event.target.value, itemName: event.target.name});
}

makePayment = () => {
  const recipientid = this.props.match.params.recipientid;
  const shelterid = this.props.match.params.shelterid;
  this.props.history.push({
    pathname: `/payments/${shelterid}/${recipientid}/${this.props.profile.name}/${this.state.itemName}/${this.state.itemCost}`
  });
}

  render(){

    if (!isLoaded(this.props.profile)) {
      return <div>Loading...</div>
    }

    const arr = [pic0, pic1, pic2, pic3];
    const rand = Math.floor(Math.random() * Math.floor(4));
    const img = arr[rand];

    var wishlist = <p className='raleway'>No wishes yet!</p>

    const wishes = this.props.profile.wishlist;
    if (wishes) {
      wishlist = []
      wishes.forEach((item, index) => {
        wishlist.push(<Form.Check name={item.name} value={item.cost} onChange={this.handleChange} type='radio' id='inline-radio-q1a' label={`${item.name} for $${item.cost}`}/>)
      })
    }

    return(
      <>
      <NavBar />

        <div className="textDiv">
        <Button variant="light" size="lg"><Link className="cinzel backToProfile" to="/" style={{color: "black"}}>Back</Link></Button>
          <br></br>
          <img src={img} style={{borderRadius: '50%', width: '10em', outline: '2px solid black'}} className="profPic"/>
          <p className="itemTitle">{this.props.profile.name}</p>
          <p className="profBio">{this.props.profile.bio}</p>
          <p className="itemTitle">Wishlist</p>
          <Form>
            <Form.Group>
              {wishlist}
            </Form.Group>
          </Form>
          <Button onClick={this.makePayment} disabled={!this.state.itemName.trim() || !this.state.itemCost.trim()} variant="dark" size="lg" className="purchaseButton">Purchase Items</Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    profile: state.firebase.data['profile'],
  };
};

export default compose(
  withRouter,
  firebaseConnect( props => {
    const recipientid = props.match.params.recipientid;
    const shelterid = props.match.params.shelterid;
    return [
      {path: `/shelters/${shelterid}/${recipientid}`, storeAs: 'profile'},
    ];
  }),
  connect(mapStateToProps))(ViewProfile);

import React, {Component} from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import SubNavBar from '../Components/SubNavBar/SubNavBar.js';
import { Button } from 'react-bootstrap';
import GiftsReceived from '../Components/GiftsReceived/GiftsReceived.js';
import {Link, Redirect} from 'react-router-dom';
import './ShelterAdminPayments.css';

import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';

class ShelterAdminPayments extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

//under donationid; {item: itemname, cost: cost, recipientname: recipientname, message: message};

  render() {
    if (!this.props.uid) {
      return <Redirect to="/"/>;
    }

    // return loading screen if not yet loaded
    if (!isLoaded(this.props.gifts)) {
      return (<div>loading</div>)
    }

    const gifts = this.props.gifts;
    var giftList = (<p className='raleway'>No gifts received yet.</p>)

    if (gifts) {
      giftList = []
      Object.keys(gifts).map((donationId, donationindex) => {
        var donation = gifts[donationId];
        console.log(donation);
        giftList.push(<React.Fragment><GiftsReceived item={donation.item} person={donation.recipientname} message={donation.message} money={donation.cost}/><br/></React.Fragment>)
      })
    }

    return (
      <>
        <NavBar/>
        <SubNavBar selected="payments"/>
        <div className="paymentInfo">
          <p className="headingText">Gifts received</p>
          {giftList}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    gifts: state.firebase.data['gifts'],
  };
};

export default compose(
  firebaseConnect( props => {
    const uid = props.uid;
    return [
      {path: `/donations/${uid}`, storeAs: 'gifts'},
    ];
  }),
  connect(mapStateToProps))(ShelterAdminPayments);

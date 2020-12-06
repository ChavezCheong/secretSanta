import React from 'react';
import {Link} from 'react-router-dom';
import './ReceiverCard.css';
import logo from '../../../Images/logo.svg';
import { Card } from 'react-bootstrap';
import {firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

const receivercard = (props) => {
  const uid = props.uid;
  const name = props.name;
  const bio = props.bio;

  return (
    <Card className='receivercard cinzel'>
      {name}
      <br/>
      {bio}
    </Card>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.firebase.auth.uid,
    profile: state.firebase.profile
  };
}

export default receivercard;

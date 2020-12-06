import React, {Component} from 'react';
import './Homepage.css';
import NavBar from '../Components/NavBar/NavBar';
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard';
import { Form, Button } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';

class Homepage extends Component {
  constructor(props) {
    super(props);
    //store user account info from text inputs
    this.state = {

    };
  }

  //change handler
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: ''});
  }

  render() {

    return(
      <div className="homepage">
        <NavBar user='giver'/>
        <br/>
        <h4 className='center raleway'>
        Welcome to Secret Santa!
        <br/>
        Thank you for your generosity. Click on any person to view their holiday wishlist. </h4>
        <hr/>
        <ReceiverCard className='card' name='Jenn' bio='Hi I am Jenn'/>
        <ReceiverCard className='card' name='Jenn' bio='Hi I am Jenn'/>
        <ReceiverCard className='card' name='Jenn' bio='Hi I am Jenn'/>
        <ReceiverCard className='card' name='Jenn' bio='Hi I am Jenn'/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(Homepage);

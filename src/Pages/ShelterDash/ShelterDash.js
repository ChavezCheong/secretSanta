import React, {Component} from 'react';
import './ShelterDash.css';
import NavBar from '../Components/NavBar/NavBar'
import { Form, Button } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';

class ShelterDash extends Component {
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
    if (!this.props.isLoggedIn) {
      return <Redirect to="/register"/ >;
    }

    return(
      <div className="dash">
        <NavBar/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(ShelterDash);

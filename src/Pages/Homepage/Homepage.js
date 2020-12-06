import React, {Component} from 'react';
import './Homepage.css';
import NavBar from '../Components/NavBar/NavBar';
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard';
import { Form, Button } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
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

    if (!isLoaded(this.props.shelters)) {
      return <div>Loading...</div>
    }

    const shelters = this.props.shelters;
    var peopleList = (<p className='raleway'>Everyone's holiday wishes are fulfilled!</p>)

    if (shelters) {
      peopleList = [];
      Object.keys(shelters).map((shelterid, shelterindex) => {
        var shelter = shelters[shelterid];
        Object.keys(shelter).map((personid, personindex) => {
          var person = shelter[personid];
          peopleList.push( <ReceiverCard name={person.name} bio={person.bio} uid={personid}/>)
        });
      });
    }

    return (
      <div className="homepage">
        <NavBar user='giver'/>
        <br/>
        <h4 className='center raleway'>
        Welcome to Secret Santa!
        <br/>
        Thank you for your generosity. Click on any person to view their holiday wishlist. </h4>
        <hr/>
        {peopleList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.firebase.auth.uid,
    shelters: state.firebase.data['shelters'],
  };
};

export default compose(
  firebaseConnect( props => {
    return [
      {path: `/shelters`, storeAs: 'shelters'},
    ];
  }),
  connect(mapStateToProps))(Homepage);

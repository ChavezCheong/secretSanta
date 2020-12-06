import React, {Component} from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import SubNavBar from '../Components/SubNavBar/SubNavBar.js';
import CreateCard from '../Components/CreateCard/CreateCard.js';
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard.js';
import {Link, Redirect} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';

class ShelterAdminPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    if (!this.props.uid) {
      return <Redirect to="/"/>;
    }

    // return loading screen if not yet loaded
    if (!isLoaded(this.props.profile) || !isLoaded(this.props.people)) {
      return (<div>loading</div>)
    }

    var peopleList = (<p className='raleway center'>There are no people in your shelter yet! Add someone to make their holiday dreams come true!</p>)

    const people = this.props.people;

    if (people) {
      peopleList =
      Object.keys(people).map((uid, index) => {
        return <ReceiverCard name={people[uid].name} bio={people[uid].bio} uid={uid} shelterid={this.props.uid}/>
      });
    }

    return (
      <>
        <NavBar/>
        <SubNavBar selected="people"/>
        <br/>
        <p className='cinzel articleheadings peopleTitle center'>Welcome back {this.props.shelterName}!</p>
        <CreateCard shelterName={this.props.shelterName} uid={this.props.uid}/>
        <hr/>
        <p className='cinzel articleheadings peopleTitle' style={{paddingLeft: '1em'}}>People:</p>
        {peopleList}
        <br/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    profile: state.firebase.data['profile'],
    people: state.firebase.data['people'],
  };
};

export default compose(
  firebaseConnect( props => {
    const uid = props.uid;
    return [
      {path: `/users/${uid}`, storeAs: 'profile'},
      {path: `/shelters/${uid}`, storeAs: 'people'},
    ];
  }),
  connect(mapStateToProps))(ShelterAdminPeople);

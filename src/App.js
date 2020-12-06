import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firebaseConnect, isLoaded} from 'react-redux-firebase';

const App = props => {

  if (!isLoaded(props.auth, props.profile)) {
    return <div>Loading...</div>
  }

  return(
    <Routes uid={props.uid}/>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
  };
};

export default
compose(
  // stores the user email/school in redux
  firebaseConnect(['/users']),
  connect(mapStateToProps)
) (App);

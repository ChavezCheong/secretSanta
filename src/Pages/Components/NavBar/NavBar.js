import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import logo from '../../../Images/logo.svg';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

const nav = (props) => {
  return(
    <Navbar className="darkblue topbar" variant="light" expand="lg">
      <Navbar.Brand><Link className='home' to='/home'><img className="logoep" src={logo} height='50em' alt='logo'/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button variant='light' onClick={() => props.firebase.logout()}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.firebase.auth.uid,
    profile: state.firebase.profile
  };
}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(nav);

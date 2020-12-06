import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import logo from '../../../Images/logo.svg';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

const nav = (props) => {
  const user = props.user;
  if (user == 'giver') {
    return (
      <Navbar className="darkblue topbar raleway" variant="light" expand="lg">
        <Navbar.Brand><Link className='home' to='/'><img className="logoep" src={logo} height='50em' alt='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant='light'><Link className='home' to='/register' style={{color: 'black'}}>For Shelters</Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  else {
    return(
      <Navbar className="darkblue topbar raleway" variant="light" expand="lg">
        <Navbar.Brand><Link className='home' to='/'><img className="logoep" src={logo} height='50em' alt='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant='light' onClick={() => props.firebase.logout()}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
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

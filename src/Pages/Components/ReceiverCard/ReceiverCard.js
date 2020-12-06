import React from 'react';
import {Link} from 'react-router-dom';
import './ReceiverCard.css';
import pic0 from '../../../Images/snowman.svg';
import pic1 from '../../../Images/penguin.svg';
import pic2 from '../../../Images/reindeer.svg';
import pic3 from '../../../Images/nutcracker.svg';
import { Card, Button, Row, Col } from 'react-bootstrap';
import {firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

const receivercard = (props) => {
  const uid = props.uid;
  const name = props.name;
  const bio = props.bio;
  const shelterid = props.shelterid;

  const arr = [pic0, pic1, pic2, pic3];
  const rand = Math.floor(Math.random() * Math.floor(4));
  const img = arr[rand];

  //exact path="/ViewProfile/:recipientid"

  return (
    <Card bg='light' className='receivercard'>
      <Row>
        <Col xs={2}>
          <img src={img} style={{margin: '1em', borderRadius: '50%', width: '10em'}}/>
        </Col>
        <Col>
          <Card.Body>
            <h1 className='cinzel'>{name}</h1>
            <hr/>
            <Card.Title>
              <p className='raleway'>{bio}</p>
            </Card.Title>
            <Button variant="dark"><Link to={`/ViewProfile/${shelterid}/${uid}`} className='raleway profileLink'>View Profile Here</Link></Button>
          </Card.Body>
        </Col>
      </Row>
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

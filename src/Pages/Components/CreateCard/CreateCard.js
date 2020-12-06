import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../ReceiverCard/ReceiverCard.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CreateCard.css';

import {firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      bio: '',
      wishlist: [],
      itemName: '',
      itemLink: '',
      itemCost: '',
    };
  }

  //change handler
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: ''});
  }

  addItem = () => {
    if (this.state.itemName.trim() && this.state.itemLink.trim() && this.state.itemCost.trim()) {
      const newItem = {name: this.state.itemName, link: this.state.itemLink, cost: this.state.itemCost};
      const wishlist = this.state.wishlist.slice().concat(newItem);
      //add to state and reset state
      this.setState({wishlist, itemName: '', itemLink: '', itemCost: ''})
    }
  }

  addPerson = () => {
    if (this.state.firstName.trim() && this.state.bio.trim() && (this.state.wishlist.length > 0)){
      const personId = this.props.firebase.push(`/shelters/${this.props.uid}`).key;
      const newPerson = {name: this.state.firstName, bio: this.state.bio, wishlist: this.state.wishlist};
      const onComplete = () => {
        console.log('New Person Added');
      }
      const updates = {};
      updates[`/shelters/${this.props.uid}/${personId}`] = newPerson;
      this.props.firebase.update(`/`, updates, onComplete);
    }
  }

  render() {
    const disabledItem = !this.state.itemName.trim() || !this.state.itemLink.trim() || !this.state.itemCost.trim();

    const disabledPerson = !this.state.firstName.trim() || !this.state.bio.trim() || (this.state.wishlist.length == 0);

    var wishlist = (<p className='raleway'>No wishes yet! Add an item!</p>)

    if (this.state.wishlist.length > 0) {
      wishlist =
      (
        <table className='raleway'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Link</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.wishlist.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td><a href={item.link}>{item.link}</a></td>
                  <td>{item.cost}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }

    return (
      <>
        <Card bg='light' className='receivercard'>
          <Row>
            <Col>
              <Card.Body>
              <p className='cinzel articleheadings'>Personal Info</p>
                <Form>
                  <Form.Group className='raleway'>
                    <Form.Control name='firstName' onChange={this.handleChange} required type='textarea' value={this.state.firstName} placeholder="First Name"/>
                  </Form.Group>
                  <Form.Group className='raleway'>
                    <Form.Control name='bio' onChange={this.handleChange} required type="textarea" value={this.state.bio} placeholder="Bio"/>
                  </Form.Group>
                  <p className='cinzel articleheadings'>Wishlist</p>
                  {wishlist}
                  <p className='cinzel articleheadings'>Add Item</p>
                  <Row>
                    <Col>
                      <Form.Group className='raleway'>
                        <Form.Control name='itemName' onChange={this.handleChange} type='textarea' value={this.state.itemName} placeholder="Item"/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='raleway'>
                        <Form.Control name='itemLink' onChange={this.handleChange} type='textarea' value={this.state.itemLink} placeholder="Link to Item"/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='raleway'>
                        <Form.Control name='itemCost' onChange={this.handleChange} type='textarea' value={this.state.itemCost} placeholder="Cost of Item in $"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant='primary' className="addButton" onClick={this.addItem} disabled={disabledItem}>Add item</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Button variant='primary' className="addButton personButton" onClick={this.addPerson} disabled={disabledPerson}>Add New Person</Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(firebaseConnect(), connect(mapStateToProps))(CreateCard);

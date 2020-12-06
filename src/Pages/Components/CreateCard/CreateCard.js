import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../ReceiverCard/ReceiverCard.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CreateCard.css';

class CreateCard extends Component {

  //Need item handleKeyPress

  //Need new person handler to close out current person and store new person

  render() {
    return (
      <>
      <p className='cinzel articleheadings peopleTitle'>Welcome back, Skipping Stones Shelter</p>
        <Card bg='light' className='receivercard'>
          <Row>
            <Col>
              <Card.Body>
              <p className='cinzel articleheadings'>Personal Info</p>
                <Form>
                  <Form.Group className='cinzel'>
                    <Form.Control placeholder="Name"/>
                  </Form.Group>
                  <Form.Group className='cinzel'>
                    <Form.Control as="textarea" placeholder="Bio"/>
                  </Form.Group>
                  <p className='cinzel articleheadings'>Wishlist</p>
                  <Row>
                    <Col>
                      <Form.Group className='cinzel'>
                        <Form.Control placeholder="Item"/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='cinzel'>
                        <Form.Control placeholder="link to item"/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='cinzel'>
                        <Form.Control placeholder="Cost of item in $"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button className="addButton" onClick="handleItem">Add item</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Button className="addButton personButton" onClick="handleNewPerson">Add New Person</Button>
      </>
    );
  }
}

export default CreateCard;

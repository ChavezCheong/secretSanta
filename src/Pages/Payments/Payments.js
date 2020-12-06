import React, {Component} from 'react';
import './Payments.css';
import NavBar from '../Components/NavBar/NavBar';
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';

class Payments extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        message: '',
        complete: false,
      };
    }

    //change handler
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value, error: ''});
    }

    makePayment = event => {
      this.setState({complete: true})
    }

    render () {

      if (this.state.complete) {
        return (
          <Redirect to='paymentResult'/>
        )
      }

      const disabled = !this.state.name.trim()
      || !this.state.cardNumber.trim()
      || !this.state.expiry.trim()
      || !this.state.cvv.trim()

        return(
            <>
                <div>
                    <NavBar user = 'giver'>
                    </NavBar>
                </div>
                <div className = "backbutton">
                    <Button variant = "light" size = "lg"><Link className = "cinzel" to =  "/" style = {{color: "black"}}>Back</Link></Button>
                </div>
                <br/>
                <div className = "paymentitems cinzel">
                    <p className="itemTitle">Purchasing For Jenn</p>
                    <h4>Jacket ($50)</h4>
                    <h4>Warm Pants ($50)</h4>
                </div>
                <div className = "form ">
                    <Form>
                    <Form.Row>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={this.handleChange} required value={this.state.name} type='textarea' placeholder = "Cardowner's Name"></Form.Control>
                    </Form.Row>
                    <Form.Row>
                        <Col xs = {7}>
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control name="cardNumber" onChange={this.handleChange} required value={this.state.cardNumber} type='textarea' placeholder="1111-2222-3333-4444" />
                        </Col>
                        <Col>
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control name="expiry" onChange={this.handleChange} required value={this.state.expiry} type='textarea' placeholder="MM/DD/YYYY" />
                        </Col>
                        <Col>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control name="cvv" onChange={this.handleChange} required value={this.state.cvv} type='textarea' placeholder="XXX" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs = {12}>
                        <Form.Group>
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control name="message" onChange={this.handleChange} value={this.state.message} type='textarea' placeholder = "Merry Christmas and a Happy New Year..."></Form.Control>
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    </Form>
                    <Button disabled={disabled} onClick={this.makePayment} size = "lg" variant = "dark" className='cinzel'>Make your Donation</Button>
                </div>
            </>
        )
    }
}

export default Payments;

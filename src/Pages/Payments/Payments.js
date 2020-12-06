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
        name: ''
      };
    }

    //change handler
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value, error: ''});
    }

    render () {

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
                        <Form.Control name = "input" placeholder = "Cardowner's Name"></Form.Control>
                    </Form.Row>
                    <Form.Row>
                        <Col xs = {7}>
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control name = "input" placeholder="1111-2222-3333-4444" />
                        </Col>
                        <Col>
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control name = "date" placeholder="MM/DD/YYYY" />
                        </Col>
                        <Col>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control name = "input" placeholder="XXX" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs = {12}>
                        <Form.Group>
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control name = "address" placeholder = "Merry Christmas and a Happy New Year..."></Form.Control>
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    </Form>
                    <Button size = "lg" variant = "dark"><Link className = "paybutton cinzel" style = {{color : "white"}} to = "/PaymentResult">Make your Donation</Link></Button>
                </div>
            </>
        )
    }
}

export default Payments;

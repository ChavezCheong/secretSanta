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
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();

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
                    <h3>Purchasing for Jenn</h3>
                    <h4>Jacket ($50)</h4>
                    <h4>Warm Pants ($50)</h4> 
                    <h3>Payment Info</h3>
                </div>
                <div className = "form">
                    
                    <Form>
                    <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                    </PaymentInputsWrapper>
                        <h4 className = "paytitle">Your Message</h4>
                        <Form.Group>
                            <Form.Control name = "input" placeholder = "Merry Christmas and a Happy New Year..."></Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {isLoggedIn: state.firebase.auth.uid};
  };

export default Payments;
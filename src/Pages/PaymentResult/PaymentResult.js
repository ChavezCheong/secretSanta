import React, {Component} from 'react';
import './PaymentResult.css';
import { Card, Button } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';
import NavBar from '../Components/NavBar/NavBar';
import penguin from '../../Images/penguin.svg'
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard';

class PaymentResult extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render () {
        return(
            <>
                <div>
                    <NavBar user = 'giver'/>
                </div>
                <br/>
                <div className = "backbutton">
                    <Button variant = "light" size = "lg"><Link className = "cinzel" to =  "/" style = {{color: "black"}}>Back</Link></Button>
                </div>
                <div className = "cutepenguin">
                    <img src = {penguin} height = '250em'/>
                </div>
                <div className = "paymentresult">
                    <Card>
                        <Card.Body>
                            <h1 className = 'paymenttext cinzel'>Thank you for your donation!</h1>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

export default PaymentResult;
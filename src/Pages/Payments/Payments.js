import React, {Component} from 'react';
import './Payments.css';
import NavBar from '../Components/NavBar/NavBar';
import ReceiverCard from '../Components/ReceiverCard/ReceiverCard';
import { Form, Button, Nav } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render () {
        return(
            <>
                <div>
                    <NavBar>

                    </NavBar>
                </div>
            </>
        )
    }
}

export default Payments;
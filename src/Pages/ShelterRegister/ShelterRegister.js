import React, {Component} from 'react';
import './ShelterRegister.css';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Grid } from 'semantic-ui-react';

class ShelterRegister extends Component {
  constructor(props) {
    super(props);
    //store user account info from text inputs
    this.state = {
      shelterName: '',
      city: '',
      state: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  //register account with firebase
  register = async () => {
    console.log('registering')
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    const profile = {
      shelterName: this.state.shelterName,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
    }

    try {
      await this.props.firebase.createUser(credentials, profile);
    }
    catch (error) {
      this.setState({error: error.message});
    }
  };

  registerCheck = () => {
    if ((this.state.password === this.state.passwordConfirm)
      && this.state.shelterName.trim()
      && this.state.city.trim()
      && this.state.state.trim()
      && this.state.email.trim()
      && this.state.password.trim()) {
      this.register();
    }
  }

  //Event Change Handler Method for text inputs
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: ''});
  }


  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/shelterAdminPeople" />
    }

    //passwords do not match error message
    if ((this.state.password !== this.state.passwordConfirm) && (this.state.passconfirm !== "Passwords do not match.")) {
      this.setState({passconfirm: "Passwords do not match."})
    } else if (this.state.password === this.state.passwordConfirm && (this.state.passconfirm !== "")) {
      this.setState({passconfirm: ""})
    }

    var disabled = !this.state.email.trim()
    || !this.state.shelterName.trim()
    || !this.state.state.trim()
    || !this.state.city.trim()
    || !this.state.password.trim()
    || !this.state.passwordConfirm.trim()
    || this.state.password !== this.state.passwordConfirm;

    return(
      <div className="register raleway">
        <div className="area" >
          <div className="contentr">

              <div className='title cinzel'>
              Secret Santa
              </div>
              <p style={{color: 'white'}}>Register your shelter to start receiving holiday donations!</p>

              <div style={{color: 'white', marginBottom: '1em'}}>{this.state.error}</div>
              <div style={{color: 'white', marginBottom: '1em'}}>{this.state.passconfirm}</div>

              <div className="form">
                <Form>
                  <Form.Group>
                      <Form.Control name="email" type="email" placeholder="Email*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="shelterName" type="text" placeholder="Shelter Name*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="city" type="text" placeholder="City*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="state" type="text" placeholder="State*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="password" type="password" placeholder="Enter Password*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="passwordConfirm" type="password" placeholder="Confirm Password*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Button variant="dark" onClick={this.registerCheck} disabled={disabled}>
                    Let's get started!
                  </Button>
                </Form>
              </div>
              <br/>
              <Link className="to-login" to="/login">Already Registered? Login!</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(ShelterRegister);

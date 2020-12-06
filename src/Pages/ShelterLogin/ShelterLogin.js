import React, {Component} from 'react';
import './ShelterLogin.css';
import { Form, Button } from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Grid } from 'semantic-ui-react';

class ShelterLogin extends Component {
  constructor(props) {
    super(props);
    //store user account info from text inputs
    this.state = {
      email: '',
      password: '',
    };
  }

  login = async () => {
    console.log('login')
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    try {
      await this.props.firebase.login(credentials);
    } catch (error) {
      this.setState({error: error.message});
    }
  };

  //key enter change handler
  handleKeyPress = event => {
    //enter
    if (event.keyCode === 13) {
      this.login();
    }
  }

  //change handler
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: ''});
  }

  //listens for key press
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dash"/ >;
    }

    var disabled = !this.state.email.trim() || !this.state.password.trim()

    return(
      <div className="login raleway">
        <div className="area" >
          <div className="contentr">
            <div className='title cinzel'>
            Secret Santa
            </div>
            <p style={{color: 'white'}}>Welcome Back!</p>
              <div style={{color: 'red', fontWeight: 'bold', marginBottom: '1em'}}>{this.state.error}</div>
              <div className="form">
                <Form>
                  
                </Form>
                <Form>
                  <Form.Group>
                      <Form.Control name="email" type="email" placeholder="Email*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control name="password" type="password" placeholder="Enter Password*" onChange={this.handleChange} required />
                  </Form.Group>
                  <Button variant="dark" onClick={this.login} disabled={disabled}>
                    Login
                  </Button>
                </Form>
              </div>
              <br/>
              <Link className="to-login" to="/register">New Here? Register!</Link>
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
  connect(mapStateToProps))(ShelterLogin);

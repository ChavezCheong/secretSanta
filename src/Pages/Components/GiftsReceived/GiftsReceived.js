import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './GiftsReceived.css';

class GiftsReceived extends Component {
  constructor(props){
    super(props);
    this.state = {
      complete: false,
    };
  }

  handleDeleteGift = event => {
    this.setState({complete: true})
  }

  render(){

    var button = (
      <Button className="adCustomButton" onClick={this.handleDeleteGift}>
        Compeleted Order
      </Button>
    )

    if (this.state.complete) {
      button = (
        <Button disabled='true' style={{backgroundColor: 'green' }} className="adCustomButton">
          Compeleted
        </Button>
      )
    }

    return(
      <div className="adminCard">
        <p className="adminCardTitle raleway">{this.props.item} for {this.props.person}</p>
        <br></br>
        <p className="adminCardSubTitle raleway">Message: {this.props.message}</p>
        {button}
        <p className="adminCardMoney">${this.props.money}</p>
      </div>
    )
  }

}

export default GiftsReceived;

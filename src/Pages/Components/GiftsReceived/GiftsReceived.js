import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './GiftsReceived.css';

class GiftsReceived extends Component {
  constructor(props){
    super();
  }

  handleDeleteGift = event => {
    //TODO Delete card from firebase and page here
  }

  render(){
    return(
      <div className="adminCard">
        <p className="adminCardTitle">{this.props.item} for {this.props.person}</p>
        <br></br>
        <p className="adminCardSubTitle">Message: {this.props.message}</p>
        <Button className="adCustomButton" onClick="handleDeleteGift">
          Compeleted Order
        </Button>
        <p className="adminCardMoney">${this.props.money}</p>
      </div>
    )
  }

}

export default GiftsReceived;

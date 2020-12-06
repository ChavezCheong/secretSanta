import React, {Component} from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import SubNavBar from '../Components/SubNavBar/SubNavBar.js';
import CreateCard from '../Components/CreateCard/CreateCard.js';

class ShelterAdminPeople extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <SubNavBar selected="people"/>
        <CreateCard />
      </>
    )
  }
}

export default ShelterAdminPeople;

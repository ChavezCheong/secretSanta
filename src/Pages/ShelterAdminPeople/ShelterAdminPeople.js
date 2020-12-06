import React, {Component} from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import SubNavBar from '../Components/SubNavBar/SubNavBar.js';

class ShelterAdminPeople extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <SubNavBar selected="people"/>
        <p>
          People
        </p>
      </>
    )
  }
}

export default ShelterAdminPeople;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelterRegister from '../Pages/ShelterRegister/ShelterRegister';
import ShelterLogin from '../Pages/ShelterLogin/ShelterLogin';

import ShelterAdminPeople from '../Pages/ShelterAdminPeople/ShelterAdminPeople.js';
import ShelterAdminPayments from '../Pages/ShelterAdminPayments/ShelterAdminPayments.js';

import Homepage from '../Pages/Homepage/Homepage';

const Routes = () => {
  return (
    <>
    <Switch>
      <Route exact path = '/'>
        <Homepage/>
      </Route>
      <Route exact path="/register">
        <ShelterRegister/>
      </Route>
      <Route exact path="/login">
        <ShelterLogin/>
      </Route>

      <Route exact path="/ShelterAdminPeople">
        <ShelterAdminPeople/>
      </Route>
      <Route exact path="/ShelterAdminPayments">
        <ShelterAdminPayments/>
      </Route>
    </Switch>
    </>
  )
}

export default Routes;

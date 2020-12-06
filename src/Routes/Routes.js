import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelterRegister from '../Pages/ShelterRegister/ShelterRegister'
import ShelterLogin from '../Pages/ShelterLogin/ShelterLogin'
import ShelterAdminPeople from '../Pages/ShelterAdminPeople/ShelterAdminPeople';
import ShelterAdminPayments from '../Pages/ShelterAdminPayments/ShelterAdminPayments';


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

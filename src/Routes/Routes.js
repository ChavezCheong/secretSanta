import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelterRegister from '../Pages/ShelterRegister/ShelterRegister'
import ShelterLogin from '../Pages/ShelterLogin/ShelterLogin'
import ShelterAdminPeople from '../Pages/ShelterAdminPeople/ShelterAdminPeople';
import ShelterAdminPayments from '../Pages/ShelterAdminPayments/ShelterAdminPayments';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.js';
import Homepage from '../Pages/Homepage/Homepage';
import Payments from '../Pages/Payments/Payments';
import PaymentResult from '../Pages/PaymentResult/PaymentResult';
import ViewProfile from '../Pages/ViewProfile/ViewProfile.js';

const Routes = (props) => {
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
        <Route exact path="/shelterAdminPeople">
          <ShelterAdminPeople uid={props.uid} shelterName={props.shelterName}/>
        </Route>
        <Route exact path="/shelterAdminPayments">
          <ShelterAdminPayments uid={props.uid} />
        </Route>
        <Route exact path="/payments">
          <Payments/>
        </Route>
        <Route exact path="/paymentResult">
          <PaymentResult/>
        </Route>
        <Route exact path="/ViewProfile">
          <ViewProfile/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </>
  );
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelterRegister from '../Pages/ShelterRegister/ShelterRegister'
import ShelterLogin from '../Pages/ShelterLogin/ShelterLogin'
import ShelterDash from '../Pages/ShelterDash/ShelterDash'

const Routes = () => {
  return (
    <>
    <Switch>
      <Route exact path="/register">
        <ShelterRegister/>
      </Route>
      <Route exact path="/login">
        <ShelterLogin/>
      </Route>
      <Route exact path="/dash">
        <ShelterDash/>
      </Route>
    </Switch>
    </>
  )
}

export default Routes;

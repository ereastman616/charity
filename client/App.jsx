import Login from './containers/Login.jsx';
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import React, { useState } from 'react';

const App = () => {
  
  return (
    <div>
      <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
      <Login />
      <Search />
      <Donations />
    </div>
  )
}
export default App;
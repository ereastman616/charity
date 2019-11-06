import Login from './containers/Login.jsx';
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import React, { useState, useEffect } from 'react';

const App = () => {
 const [status, setStatus] = useState(false);
  const logout = () => {
    FB.logout((response) => {
      console.log(response);
    });
    setStatus(false);
  }
 useEffect(() => {
   window.fbAsyncInit = function() {
     FB.init({
       appId      : '796716227415002',
       cookie     : true,
       xfbml      : true,
       version    : 'v5.0'
     });
     
   
       FB.login(function(response) {
         if (response.status === 'connected') {
           setStatus(true);
         }
         console.log('authResponse is', response)
           if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             FB.api('/me', function(response) {
                 console.log(response);
                 console.log('Good to see you, ' + response.name + '.');
               });
             } else {
               console.log('User cancelled login or did not fully authorize.');
             }
         });
             FB.AppEvents.logPageView();   
             
             };
               
               (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
                 
               }(document, 'script', 'facebook-jssdk'));
   
 })
  return (
    <div className='app'>
      {!status && <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true"></div>}
      {status && <button onClick={logout}>Log Out of Facebook</button>}
      <Login />
      {status && <Search />}
      {status && <Donations />}
    </div>
  )
}
export default App;
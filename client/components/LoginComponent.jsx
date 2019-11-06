// import React, { Component} from 'react';
// import { FacebookProvider, LoginButton } from 'react-facebook';
 
// export default class LoginComponent extends Component {
//   handleResponse(data) {
//     console.log(data);
//   }
 
//   handleError(error) {
//     this.setState({ error });
//   }
 
//   render() {
//     return (
//       <FacebookProvider appId="796716227415002">
//         <LoginButton
//           scope="email"
//           onCompleted={this.handleResponse}
//           onError={this.handleError}
//         >
//           <span>Login via Facebook</span>
//         </LoginButton>
//       </FacebookProvider>
//     );
//   }
// }

// import React, { Component } from 'react';

// export default class LoginComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.initializeFacebookLogin.bind(this);
//     this.facebookLogin.bind(this);
//   }

//   componentDidMount() {
//     document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
//   }

//   /**
//    * Init FB object and check Facebook Login status
//    */
//   initializeFacebookLogin() {
//     this.FB = window.FB;
//     this.checkLoginStatus();
//   }

//   /**
//    * Check login status
//    */
//   checkLoginStatus() {
//     this.FB.getLoginStatus(this.facebookLoginHandler);
//   }

//   /**
//    * Check login status and call login api is user is not logged in
//    */
//   facebookLogin() {
//     console.log(window.FB);
//     if (!window.FB) return;

//     this.FB.getLoginStatus(response => {
//       if (response.status === 'connected') {
//         this.facebookLoginHandler(response);
//       } else {
//         this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
//       }
//     }, );
//   }

//   /**
//    * Handle login response
//    */
//   facebookLoginHandler(response) {
//     if (response.status === 'connected') {
//       this.FB.api('/me', userData => {
//         let result = {
//           ...response,
//           user: userData
//         };
//         this.props.onLogin(true, result);
//       });
//     } else {
//       this.props.onLogin(false);
//     }
//   }

//   render() {
//     let {children} = this.props;
//     return (
//       <button onClick={this.facebookLogin}>
//         {children}
//       </button>
//     );
//   }
// }


// import React from 'react';

// class LoginComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   loadFbLoginApi() {

//     window.fbAsyncInit = function() {
//       FB.init({
//         appId      : '796716227415002',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v5.0'
//       });

//       console.log("Loading fb api");
//       // Load the SDK asynchronously
//       (function(d, s, id){
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {return;}
//         js = d.createElement(s); js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
        
//       }(document, 'script', 'facebook-jssdk'));
//     }
//   }

//   componentDidMount() {
//       this.loadFbLoginApi();
//   }

//   testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
//     });
//   }

//   statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     if (response.status === 'connected') {
//       this.testAPI();
//     } else if (response.status === 'not_authorized') {
//         console.log("Please log into this app.");
//     } else {
//         console.log("Please log into this facebook.");
//     }
//   }

//   checkLoginState() {
//     window.FB.getLoginStatus(function(response) {
//       this.statusChangeCallback(response);
//     }.bind(this));
//   }

//   handleFBLogin() {
//     window.FB.login(this.checkLoginState());
//   }

//   render() {
//     return (
//       <div>
//         {/* <MyButton
//           classNames = "btn-facebook"
//           id         = "btn-social-login"
//           whenClicked = {this.handleFBLogin}
//           >
//           <span className="fa fa-facebook"></span> Sign in with Facebook
//         </MyButton> */}
//         <button onClick={this.handleFBLogin}></button>
//         {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div> */}
//       </div>
//     );
//   }
// }

// export default LoginComponent;


// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// function onSignIn(googleUser) {
//     var id_token = googleUser.getAuthResponse().id_token;
//     }

//     gapi.load('auth2', function() {
//         auth2 = gapi.auth2.init({
//           client_id: 'CLIENT_ID.apps.googleusercontent.com',
//           fetch_basic_profile: false,
//           scope: 'profile'
//         });
      
//         // Sign the user in, and then retrieve their ID.
//         auth2.signIn().then(function() {
//           console.log(auth2.currentUser.get().getId());
//         });
//       });

// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onload = function () {
//     console.log('Signed in as: ' + xhr.responseText);
// };
// xhr.send('idtoken=' + id_token);

// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
// async function verify() {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//         // Or, if multiple clients access the backend:
//         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     });
//     const payload = ticket.getPayload();
//     const userid = payload['sub'];
//     // If request specified a G Suite domain:
//     //const domain = payload['hd'];
// }
// verify().catch(console.error);

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function BaseComponent(PassedComponent) {
    class Authenticate extends React.Component {

        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                browserHistory.push('/login')
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                browserHistory.push('/login')
            }
        }

        render() {
            return (
                <PassedComponent {...this.props} />
            )
        }
    }


    Authenticate.propTypes = {
       isAuthenticated: React.PropTypes.bool.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.usersReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);

}
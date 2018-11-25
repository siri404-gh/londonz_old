/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// React core.
import React from 'react';

// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
// Styles
import styles from './login.css'; // This uses CSS modules.
import './firebaseui-styling.global.css'; // Import globally.
const { navbar: { title }, firebaseConfig } = require('../../../../config/variables');

const firebaseApp = firebase.initializeApp(firebaseConfig);
const delay = 2000;
class Login extends React.Component {
  uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  state = {
    isSignedIn: undefined,
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      if(user) setTimeout(() => this.props.history.push('/app'), delay);
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.state.isSignedIn);
    return (
      <div className="container">
        <div className="logo">
          <h1 className="caption">{title}</h1>
          <img className="logoIcon" src="/img/logo-192.png"/>
        </div>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn && <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()}/>}
        {(this.state.isSignedIn === undefined || this.state.isSignedIn) && <LoadingIndicator />}
      </div>
    );
  }
}

export default Login;
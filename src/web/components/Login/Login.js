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

// Styles
import styles from './login.css'; // This uses CSS modules.
import './firebaseui-styling.global.css'; // Import globally.

const config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "londonz-stage.firebaseapp.com",
  databaseURL: "https://londonz-stage.firebaseio.com",
  projectId: "londonz-stage",
  storageBucket: "londonz-stage.appspot.com",
  messagingSenderId: "1052545227182",
};

const firebaseApp = firebase.initializeApp(config);

class Login extends React.Component {
  uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
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
      console.log(user);
      if(user) this.props.history.push('/app');
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn && <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()}/>}
        {/* {this.state.isSignedIn &&
          <div className={styles.signedIn}>
            Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
            <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
          </div>} */}
      </div>
    );
  }
}

export default Login;
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { connect } from 'react-redux';
import { setUserDetails, setAppIsLoading } from '../../../data/app/appActions';

const { firebaseConfig } = require('../../../../config/variables');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const delay = 1000;

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
    const { setUserDetails, setAppIsLoading } = this.props;
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      if(user) {
        setUserDetails(user);
        setAppIsLoading(false);
        setTimeout(() => this.props.history.push('/app'), delay);
      }
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return <div className="container">
      {this.state.isSignedIn === false
        ? <StyledFirebaseAuth className="firebaseUi" uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()}/>
        : <LoadingIndicator/>}
    </div>
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setUserDetails: data => dispatch(setUserDetails(data)),
  setAppIsLoading: data => dispatch(setAppIsLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
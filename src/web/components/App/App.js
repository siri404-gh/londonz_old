import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Paperbase from '../Paperbase/Paperbase';
import store from '../../../data/store/store';

//includes
import './includes';

class App extends Component {
  render() {
    return <Paperbase />;
  }
}

export default hot(module)(App);
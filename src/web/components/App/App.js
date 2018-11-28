import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Paperbase from '../Paperbase/Paperbase';
import store from '../../../data/store/store';

//includes
import theme from '../../../../config/theme/theme';
import '../../assets/favicon.ico';
import '../../assets/logo-192.png';
import '../../assets/logo-512.png';

class App extends Component {
  componentDidMount() {
    if (!window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
        <Provider store={store}>
          <Paperbase />
        </Provider>
    );
  }
}

export default hot(module)(App);

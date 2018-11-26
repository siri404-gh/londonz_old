import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Drawer from '../Drawer/Drawer';
import theme from '../../../../config/theme/theme';
import '../../assets/favicon.ico';
import '../../assets/logo-192.png';
import '../../assets/logo-512.png';

import store from '../../../data/store/store';

class App extends Component {
  componentDidMount() {
    if (!window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Drawer />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);

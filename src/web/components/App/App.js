import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Drawer from '../Drawer/Drawer';
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
      <MuiThemeProvider theme={theme}>
        <Drawer />
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);

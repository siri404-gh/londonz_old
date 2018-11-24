import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
// import Navbar from '../Navbar/Navbar';
import Drawer from '../Drawer/Drawer';
import theme from './theme';
import '../../assets/favicon.ico';
import '../../assets/logo-192.png';
import '../../assets/logo-512.png';

const { navbar: { title, tagline } } = require('../../../../config/variables');

class App extends Component {
  componentDidMount() {
    if (!window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Drawer />
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
// import Navbar from '../Navbar/Navbar';
// import Card from '../Card/Card';
// import Paper from '../Paper/Paper';
// import TitlebarGridList from '../TitlebarGridList/TitlebarGridList';
import styles from './styles';
import theme from './theme';
import './app.less';
import '../../assets/favicon.png';

// const { navbar : { title, tagline } } = require('../../../../config/variables');

class App extends Component {
  componentDidMount() {
    if (!window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}> London Z
          {/* <div><Navbar title={title} tagline={tagline}/></div>
          <div><Paper /></div>
          <div><Card /></div> */}
          {/* <TitlebarGridList /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(withStyles(styles)(App));

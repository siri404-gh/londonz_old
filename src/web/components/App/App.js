import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import theme from './theme';
import './app.less';

class App extends Component {
  componentDidMount() {
    if (!window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}>londonz
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(withStyles(styles)(App));

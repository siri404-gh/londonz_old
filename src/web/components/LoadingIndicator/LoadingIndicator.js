import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loader.css';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return <div className="logo">
    <img alt="logo" className="logoIcon rotate" src="/img/logo-192.png" />
  </div>;
  return (
    <div>
      <CircularProgress className={classes.progress} /> <br />
      {/* <CircularProgress className={classes.progress} color="secondary" /> */}
      Loading..
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);

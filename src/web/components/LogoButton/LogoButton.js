import React from 'react';
import Typography from "@material-ui/core/Typography";
import './LogoButton.less';

const LogoButton = () => <button className="btn-logo">
  <img alt="logo" className="drawer-logo" src="/img/logo-192.png" />
  <Typography variant="h5" color="inherit" style={{ display: 'inline', marginTop: -15 }}>Photos</Typography>
</button>;

export default LogoButton;
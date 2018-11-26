import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '../Tabs/Tabs';
import LogoButton from '../LogoButton/LogoButton';
import styles from './styles';
import './Drawer.less';

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = <div>
      {/* <div className={classes.toolbar} /> */}
      <LogoButton />
      <Divider />
      <List>
        {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text) => <ListItem button key={text}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
        )}
      </List>
      <Divider />
    </div>;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Responsive drawer
            </Typography>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              className={classes.avatarIcon}>
              <Avatar alt="Remy Sharp" src="/img/logo-512.png" className={classNames(classes.avatar, classes.bigAvatar)} />
              {/* <AccountCircle /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>Sign out</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Hidden mdUp implementation="css"><Tabs /></Hidden>
          {/* <Typography paragraph>
            Hey, I am Sreeram Padmanabhan. Some friends call me Sree. I am a Web Developer and this is my Web Boilerplate project. Its a comprehensive tutorial on how to create your own website from scratch. This website will be performant, will look pleasing, will be responsive, accessible and will be search engine optimised. It will use the latest web technologies which most enterprise companies use today.
          </Typography>
          <Typography paragraph>
            At the end of this tutorial, you will have a boilerplate project from which you can build any application you want and deploy to the Web, Mobile or even as a Desktop app with zero or minimal configuration. Infact, this very website was made using the boilerplate. Navigate through the links in the left sidebar to learn more about each topic.
          </Typography> */}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

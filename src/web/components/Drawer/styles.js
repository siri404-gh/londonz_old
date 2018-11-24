const drawerWidth = 300;

/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  toolbar: {
    minHeight: 50,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    border: 'none',
  },
  listItem: {
    padding: 12,
    paddingLeft: 25,
  },
  active: {
    backgroundColor: '#ecf0f2',
    borderLeft: 'solid 3px blue',
  },
});

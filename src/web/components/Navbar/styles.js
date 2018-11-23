/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#8c8c8c',
    backgroundColor: '#ffffff',
  },
  toolBar: {
    minHeight: 1,
  },
  menuIcon: {
    marginLeft: -20,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  flex: {
    flexGrow: 1,
  },
  italics: {
    fontStyle: 'italic',
  },
  tabsRoot: {
    'marginLeft': theme.spacing.unit * 5,
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    'textTransform': 'initial',
    'minWidth': 72,
    'fontWeight': theme.typography.fontWeightRegular,
    'marginRight': theme.spacing.unit * 3,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
});

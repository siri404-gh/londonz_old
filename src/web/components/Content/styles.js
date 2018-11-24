/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 2,
  },
  toolbar: {
    minHeight: 48,
  },
});

/*eslint-disable no-unused-vars */

import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  accentColor,
  accentColorDark,
  accentColorLight,
  text,
  primaryText,
  secondaryText,
  accentText,
  backgroundColor,
  errorColor,
  backgroundContrast,
  backgroundColorDark,
  backgroundDarkGradient,
  backgroundLightGradient,
  backgroundContrastDarkGradient,
  backgroundContrastLightGradient,
} from './colors';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true,
  },

  // palette: {
  //   primary: {
  //     light: primaryColorLight,
  //     main: primaryColor,
  //     dark: primaryColorDark,
  //     contrastText: primaryText,
  //   },
  //   secondary: {
  //     light: accentColorLight,
  //     main: accentColor,
  //     dark: accentColorDark,
  //     contrastText: primaryText,
  //   },
  //   error: { main: errorColor },
  //   contrastThreshold: 3,
  //   tonalOffset: 0.2,
  // },
  shadows: ['none'],
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        // background: backgroundDarkGradient,
        backgroundColor: '#039be5',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: backgroundColorDark,
      },
    },
    // MuiSnackbarContent: {
    //   root: {
    //     backgroundColor: primaryColorDark,
    //   },
    // },
    // MuiTooltip: {
    //   tooltip: {
    //     background: backgroundDarkGradient,
    //   },
    // },
    // MuiLinearProgress: {
    //   root: {
    //     height: '0.25rem',
    //   },
    //   colorSecondary: {
    //     backgroundColor: 'transparent',
    //   },
    // },
  },
});

export default theme;
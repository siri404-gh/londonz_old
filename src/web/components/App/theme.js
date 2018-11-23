import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: orange,
  },
  background: {
    primary: '#ecf0f2',
  },
  typography: {
    fontSize: 13,
    useNextVariants: true,
  },
});

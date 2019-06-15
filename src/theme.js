import { createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import amber from '@material-ui/core/colors/amber'
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: amber,
    error: red,
  },
  typography: {
    h1: {
      fontSize: '3.0rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    h2: {
      fontSize: '2.8rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    h3: {
      fontSize: '2.4rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    h4: {
      fontSize: '2.0rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    h5: {
      fontSize: '1.8rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    h6: {
      fontSize: '1.6rem',
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
    },
    body1: {
      fontFamily: [
        'Merriweather',
        'serif',
      ],
      lineHeight: '2',
    },
    body2: {
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ],
      lineHeight: '2',
    },
  },
})

import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2DD886',
    },
    secondary: {
      main: '#5E807F',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#757575',
      secondary: '#ADADAD',
      disabled: '#D4D4D4',
      hint: '#757575',
      white: 'FFFFFF'
    },
    error: {
      main: '#FF3124',
    },
    errorBG: {
      main: '#FFEBEA',
    },
    warning: {
      main: '#FFD600',
    },
    warningBG: {
      main: '#FFFBEC',
    },
    success: {
      main: '#2DD886',
    },
    successBG: {
      main: '#DDFFEE',
    },
    successBGLight: {
      main: '#EFFBF5',
    },
    disabled: {
      main: '#D4D4D4',
    },
    disabledBG: {
      main: '#F1F1F1',
    },
    off: {
      main: '#9A9A9A',
    },
    offBG: {
      main: '#F1F1F1',
    },
    graphGridline: {
      main: rgba(0, 0, 0, 0.13),
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h3: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 1000,
    },
    widgetTitle: {
      fontSize: 23,
    },
    widgetStatValue: {
      fontFamily: 'Questrial',
      fontSize: 38,
    },
    widgetStatSmall: {
      fontFamily: 'Questrial',
      fontSize: 22,
    },
    widgetStatLabel: {
      fontSize: 15.7,
    },
    widgetStatusBadge: {
      fontSize: 14,
    },
    widgetOnOffButton: {
      fontSize: 14,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
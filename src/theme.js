import { createTheme } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
  palette: {
    type: 'light',
    primary: { // sprout green
      main: '#2DD886',
    },
    secondary: {
      main: '#5E807F',
    },
    light: {
      main: '#ECECEC',
    },
    dark: {
      main: '#757575',
    },
    lightGreen: {
      main: '#EFFBF5',
    },
    background: {
      default: '#56B284',
    },
    error: {
      main: '#FF3124',
      light: '#FFEBEA',
    },
    warning: {
      main: '#FFD600',
      light: '#FFFBEC',
    },
    success: {
      main: '#2DD886',
      light: '#DDFFEE',
      lighter: '#EFFBF5',
    },
    disabled: {
      main: '#D4D4D4',
      light: '#F1F1F1',
    },
    off: {
      main: '#9A9A9A',
      light: '#F1F1F1',
    },
    text: {
      primary: '#757575',
      secondary: '#ADADAD',
      light: '#BEBEBE',
      disabled: '#D4D4D4',
      hint: '#757575',
      white: '#FFFFFF',
      lightGreen: '#79E7B2',
    },
    graphGridline: {
      main: 'rgba(0, 0, 0, 0.13)',
    },
  },
  // status: {
    
  // },
  typography: {
    fontFamily: [
      'Quicksand',
      'Questrial',
    ].join(','),
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
      align: 'left',
      fontSize: 23,
      fontWeight: 600,
    },
    widgetStat: {
      fontFamily: 'Questrial',
      fontSize: 38,
    },
    widgetStatSmall: {
      fontFamily: 'Questrial',
      fontSize: 22,
    },
    widgetStatLabel: {
      fontWeight: 600,
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
  spacing: 2,
});

theme = createTheme(theme, {
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
            borderRadius: 7,
            textTransform: 'uppercase',
        },
      },
      variants: [
        {
          props: { variant: 'running' },
          style: {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'idle' },
          style: {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'warning' },
          style: {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.warning.light,
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'error' },
          style: {
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'offline' },
          style: {
            color: theme.palette.disabled.main,
            backgroundColor: theme.palette.disabled.light,
            fontWeight: 600,
          },
        },
      ],
    },
  },
})

export default theme;
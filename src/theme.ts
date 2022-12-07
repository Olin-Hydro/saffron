import { createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography'
// A custom theme for this app

interface ExtendedTypographyOptions extends TypographyOptions {
  widgetTitle: React.CSSProperties;
}

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
  } as ExtendedTypographyOptions,
  shape: {
    borderRadius: 10,
  },
  spacing: 2,
});

theme = createTheme(theme, {
  components: {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
            borderRadius: 7,
            textTransform: 'uppercase',
            fontWeight: 800,
        },
      },
      variants: [
        {
          props: { variant: 'statusRunning' },
          style: {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
          },
        },
        {
          props: { variant: 'statusIdle' },
          style: {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
          },
        },
        {
          props: { variant: 'statusWarning' },
          style: {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.warning.light,
          },
        },
        {
          props: { variant: 'statusError' },
          style: {
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
          },
        },
        {
          props: { variant: 'statusOffline' },
          style: {
            color: theme.palette.disabled.main,
            backgroundColor: theme.palette.disabled.light,
          },
        },
        {
          props: { variant: 'switchOn' },
          style: {
            color: theme.palette.primary.light,
            border: "solid",
          },
        },
        {
          props: { variant: 'switchOff' },
          style: {
            color: theme.palette.primary.light,
            border: "solid",
          },
        },
        {
          props: { variant: 'switchDisabled' },
          style: {
            color: theme.palette.disabled.main,
            border: "solid",
            borderColor: theme.palette.disabled.light,
          },
          disabled: true,
        },
      ],
    },
  },
})

export default theme;
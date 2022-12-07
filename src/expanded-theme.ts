import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface SimplePaletteColorOptions {
      lighter?: string;
    }
    interface PaletteColor {
      lighter?: string;
    }
    interface TypeText {
        light?: string;
        hint?: string;
        white?:string;
        lightGreen?:string;
    }
    interface PaletteOptions {
        type?: string;
        light?: any;
        dark?: any;
        lightGreen?: any;
        disabled?: any;
        off?:any;
        graphGridline?:any;
    }
    interface Palette {
        disabled?: any;
    }
    
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        statusRunning: true;
        statusIdle: true;
        statusWarning: true;
        statusError: true;
        statusOffline: true;
        switchOn: true;
        switchOff: true;
        switchDisabled: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        light: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        widgetTitle: true;
        widgetStat: true;
        widgetStatLabel: true;
        widgetStatSmall: true;
    }
}
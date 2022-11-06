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

declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        running: true;
        idle: true;
        warning: true;
        error: true;
        offline: true;
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
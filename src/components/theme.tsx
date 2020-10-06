import * as React from 'react';
import { createMuiTheme} from "@material-ui/core";
import { ui } from '../constants/ui';

export const theme = createMuiTheme({

    typography: {
        body1: {
            fontWeight: 400,
            fontFamily: "Lato, Sans Serif"
        }
    },
    palette: {
        primary: {
            main: ui.scheme.secondary ,
            dark: ui.scheme.primary,
            light: ui.scheme.secondaryAlt
        },
        secondary: {
            main: ui.scheme.background,
            light: ui.scheme.backgroundAlt,
            dark: ui.scheme.primary
        },
    },
    shape: {
        borderRadius: 5
    },
    spacing: 10,
    

});

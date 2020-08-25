import * as React from 'react';
import { createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({

    typography: {
        body1: {
            fontWeight: 400,
            fontFamily: "Lato, Sans Serif"
        }
    },
    palette: {
        primary: {
            main: "#ad1457",
            dark: "#78002e",
            light: "#78002e"
        },
        secondary: {
            main: "#1e88e5",
            light: "#6ab7ff",
            dark: "#005cb2"
        },
    },
    shape: {
        borderRadius: 5
    },
    spacing: 10,

});

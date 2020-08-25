import { transparent } from "material-ui/styles/colors"


const colors = {
    brand: {
        main: "#54B3AC",
        first: "#9CFAF3",
        second: "#3D74B3",
        third:"#3D74B3",
        fourth: "#2B8EFF"
    },

    typography: {
        main: "#D7D7D7",
        first: "#A4A4A4",
        second: "#5B5B5B",
        third: "#272727",
        fourth: "#0C0C0C",

        white: "#fff",
        black: "#000"
    }
}

export const ui = {

    hero: {
        content: {
            background: colors.typography.black,

            title: {
                color: colors.typography.white
            }
        }
    },

    footer: {
        color: colors.typography.black,
        
        background: {
            color: colors.typography.white,
            border: colors.typography.second,
        }
    },

    header: {
        color: colors.typography.black,
        background: {
            color: 'transparent',
            border: 'none'
        }
    }

}
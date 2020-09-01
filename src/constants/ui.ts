import { transparent } from "material-ui/styles/colors"

const colors = {
  content: {
    primary: "#080B0D",
    secondary: "#594328",
    secondaryAlt: "#A67A46",
    ternary: "#D95A2B",
    background: "#FBBA65",
    backgroundAlt: "#f9dab4"
  },

  typography: {
    white: "#fff",
    black: "#000",
  },
}

export const ui = {
  scheme: {
    primary: colors.content.primary,
    secondary: colors.content.secondary,
    secondaryAlt: colors.content.secondaryAlt,
    ternary: colors.content.ternary,

    background: colors.content.background,
    backgroundAlt: colors.content.backgroundAlt,
    white: colors.typography.white
  },

  hero: {
    content: {
      background: colors.typography.black,

      title: {
        color: colors.typography.white,
      },
    },
  },

  footer: {
    color: colors.typography.black,

    background: {
      color: colors.typography.white,
      border: colors.typography.black,
    },
  },

  header: {
    color: colors.typography.black,
    background: {
      color: colors.content.background,
      border: "none",
    },
  },
}

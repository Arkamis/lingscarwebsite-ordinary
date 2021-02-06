import { createMuiTheme } from "@material-ui/core/styles";
import { green, grey, red } from "@material-ui/core/colors";

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 18,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 72,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 62,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 52,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 40,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 32,
      ...fontHeader,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 26,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 22,
      color: rawTheme.palette.text.secondary,
      fontWeight: rawTheme.typography.fontWeightMedium,
    },
    subtitle2: {
      ...rawTheme.typography.subtitle2,
      fontSize: 22,
      color: grey[500],
      fontWeight: rawTheme.typography.fontWeightMedium,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 18,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 16,
    },
  },
};

export default theme;

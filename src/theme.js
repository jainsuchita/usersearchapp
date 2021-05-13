import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4b4d48",
    },
    secondary: {
      main: "#ffa500",
    },
    background: {
      default: "#414040",
    },
  },
  //   typography: {
  //     fontFamily: "Open Sans",
  //   },
});

export default theme;

import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 320, md: 768, lg: 1024, xl: 1580 },
  },
  components: {
    // Name of the component
    // MuiAvatar: {
    //   styleOverrides: {
    //     colorDefault: {
    //       textTransform: "uppercase",
    //       backgroundColor: "#35414a",
    //       fontFamily: "ProximaNova-Light, Helvetica, Arial, sans-serif",
    //     },
    //   },
    // },
  },
});

export default theme;

import React from "react";
import SignUp from "../src/components/SignUp";
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../src/styles/MuiTheme";

function App() {
  const theme = MuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
}

export default App;

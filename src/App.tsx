import React from "react";
import SignIn from "./components/SignIn";
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../src/styles/MuiTheme";

function App() {
  const theme = MuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;

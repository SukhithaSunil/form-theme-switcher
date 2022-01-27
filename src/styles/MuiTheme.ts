import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { currentTheme } from "../redux/reducers/themeSlice";

export interface ThemeState {
  theme: "light" | "dark";
}

const MuiTheme = () => {
  const theme = createTheme({
    palette: {
      mode: currentTheme.toString() as PaletteMode,
      primary: {
        main: currentTheme.toString() === "dark" ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: currentTheme.toString() === "dark" ? "#0088ff" : "#f50057",
        // contrastText: currentTheme.toString() === 'dark' ? red[800] : red[200],
      },
      background: {
        default: currentTheme.toString() === "dark" ? "#212121" : "#fff",
        paper: currentTheme.toString() === "dark" ? "#424242" : "#fff",
      },
    },
  });
  return theme;
};

export default MuiTheme;

import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { currentTheme } from "../redux/reducers/themeSlice";
import { useAppSelector } from "../redux/store/store";

const MuiTheme = () => {
  const selectedTheme = useAppSelector(currentTheme);

  const theme: PaletteMode =
    selectedTheme.toString() == "dark" ? "dark" : "light";

  const newTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background:
              theme == "light"
                ? "linear-gradient(45deg, #F2E2BA, transparent 25% 75%, #F2E2BA),linear-gradient(135deg, #e5eafb, #ffff 25% 75%, #e5eafb)"
                : "linear-gradient(45deg, #323269, transparent 25% 75%, #323269), linear-gradient(135deg, #4f244f, #210c4c 25% 75%, #4f244f) ",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
    palette: {
      mode: theme,
      primary: {
        main: "#FC5C55",
      },
      secondary: {
        main: theme === "dark" ? "#fff" : "#ffdede",
        contrastText: theme === "dark" ? "blue" : "blue",
      },
      background: {
        default: theme === "dark" ? "#212121" : "#fff",
        paper:
          theme == "light"
            ? "linear-gradient(45deg, #F2E2BA, transparent 25% 75%, #F2E2BA),linear-gradient(135deg, #E5EAFB, #E5EAFB 25% 75%, #E5EAFB)"
            : "linear-gradient(135deg, #323269, transparent 25% 75%, #323269), linear-gradient(45deg, #4f244f, #210c4c 25% 75%, #4f244f) ",
      },
      error: {
        main: theme === "dark" ? "#f2e2ba" : "#FC5C55",
      },
      text: {
        primary: theme === "dark" ? "#fff" : "#000",
        secondary: "#FC5C55",
      },
    },
  });
  return newTheme;
};

export { MuiTheme };

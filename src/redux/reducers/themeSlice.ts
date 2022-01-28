import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface ThemeState {
  theme: PaletteMode;
}

const findThemefromLocal = () => {
  return (localStorage.getItem("theme") || "light") as PaletteMode;
};
const initialState: ThemeState = {
  theme: findThemefromLocal(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      localStorage.setItem("theme", state.theme === "dark" ? "light" : "dark");
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const currentTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;

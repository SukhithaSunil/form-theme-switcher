import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";
import { PaletteMode } from "@mui/material";

export interface ThemeState {
  theme: PaletteMode;
}

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { changeTheme } = themeSlice.actions;

export const currentTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
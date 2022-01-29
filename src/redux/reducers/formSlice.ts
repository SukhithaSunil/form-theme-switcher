import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../../services";
import { RootState } from "../store/store";
interface Formtype {
  status: "idle" | "loading" | "succeeded";
  error: string | null | undefined;
}
const initialState = {
  status: "idle",
  error: null,
} as Formtype;

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      }
      state.status = "idle";
    });
  },
});

export const formState = (state: RootState) => state.form.status;
export const formError = (state: RootState) => state.form.error;

export default formSlice.reducer;

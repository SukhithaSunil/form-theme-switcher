import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { AxiosError } from "axios";

export interface User {
  password: string;
  email: string;
}
type loginError = {
  message: string;
};
const loginThunk = createAsyncThunk<
  // Return type of the payload creator
  string,
  // First argument to the payload creator
  User,
  // Types for ThunkAPI
  {
    rejectValue: loginError;
  }
>("users/login", async (userData: User, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const resp = await response.json();
    console.log(resp);
    return resp;
  } catch (err: any) {
    const error: AxiosError<loginError> = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return rejectWithValue(error.response.data);
  }
});

interface Formtype {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
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
      state.status = "idle";
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.message;
      }
      state.status = "idle";
    });
  },
});

export { loginThunk };
export const formState = (state: RootState) => state.form.status;
export default formSlice.reducer;

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
>("users/login", async (userData: User, thunkApi) => {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status !== 200) {
    const message = await response.json();
    return thunkApi.rejectWithValue({ message } as loginError);
  }
  const resp = await response.json();
  console.log(resp);
  return resp;
});

interface Formtype {
  status: "idle" | "loading" | "succeeded";
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
      state.status = "succeeded";
      state.error = null;
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
export const formError = (state: RootState) => state.form.error;

export default formSlice.reducer;

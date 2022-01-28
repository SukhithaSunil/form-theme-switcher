import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

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
    // Return the known error for future handling
    console.log(await response.json());
    return thunkApi.rejectWithValue((await response.json()) as loginError);
  }
  const resp = await response.json();
  console.log(resp);
  return resp;
});

interface Formtype {
  status: "idle" | "loading" | "succeeded" | "failed";
}
const initialState = {
  status: "idle",
} as Formtype;

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.status = "idle";
    });
  },
});

export { loginThunk };
export const formState = (state: RootState) => state.form.status;
export default formSlice.reducer;

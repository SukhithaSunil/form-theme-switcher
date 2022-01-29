import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const loginThunk = createAsyncThunk<
  string,
  User,
  {
    rejectValue: loginError;
  }
>("users/login", async (userData: User, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue({ errorMessage: error.response.data });
  }
});
export interface User {
  password: string;
  email: string;
  fullName: string;
}
type loginError = {
  errorMessage: string;
};
const BASE_URL = "http://localhost:3001";

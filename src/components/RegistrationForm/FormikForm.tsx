import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "@mui/lab/LoadingButton";

import { FormikProps } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { formState } from "../../redux/reducers/formSlice";
export interface User {
  password: string;
  email: string;
  fullName: string;
}

interface IProps {
  formik: FormikProps<User>;
}
const FormikForm = ({ formik }: IProps) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(formState).toString();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullName"
          placeholder="Full Name"
          name="fullName"
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email"
          autoComplete="current-email"
          name="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordView} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          loading={status === "loading"}
          variant="contained"
          loadingIndicator={<CircularProgress color="primary" size={25} />}
          fullWidth
          type="submit"
          sx={{
            height: 56,
            mt: 2,
            textTransform: "capitalize",
            fontWeight: "500",
            fontSize: "medium",
          }}
        >
          Continue
        </LoadingButton>
      </form>
    </div>
  );
};

export default FormikForm;

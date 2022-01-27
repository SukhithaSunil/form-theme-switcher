import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const validationSchema = yup.object({
  fullName: yup
    .string()
    // .min(8, "Password should be of minimum 8 characters length")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegsitrationForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            height: 56,
            mt: 2,
            textTransform: "capitalize",
          }}
        >
          <span style={{ fontWeight: "500", fontSize: "medium" }}>
            Continue
          </span>
        </Button>
      </form>
    </div>
  );
};

export default RegsitrationForm;

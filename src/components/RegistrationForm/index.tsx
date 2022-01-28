import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/store/store";
import { loginThunk } from "../../redux/reducers/formSlice";

import FormikForm from "./FormikForm";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
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
  const handleFormSubmit = ({ email, password }: User) => {
    dispatch(loginThunk({ email, password }));
  };
  const formikConfig = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });
  return <FormikForm formik={formikConfig} />;
};

export default RegistrationForm;
export interface User {
  password: string;
  email: string;
}

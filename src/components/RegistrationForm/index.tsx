import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/store/store";
import {
  loginThunk,
  formError,
  formState,
} from "../../redux/reducers/formSlice";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import FormikForm from "./FormikForm";
import { useSelector } from "react-redux";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const errorMsg = useSelector(formError);
  const status = useSelector(formState).toString();
  const notifyErrorMsg = () =>
    toast.error(errorMsg, {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  const notifySuccess = () =>
    toast.success("Valid Credentials", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  useEffect(() => {
    if (status === "succeeded") notifySuccess();
    if (errorMsg) notifyErrorMsg();
  }, [errorMsg, status]);

  const validationSchema = yup.object({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const handleFormSubmit = (user: User) => {
    dispatch(loginThunk(user));
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
  return (
    <>
      <FormikForm formik={formikConfig} />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default RegistrationForm;
export interface User {
  password: string;
  email: string;
  fullName: string;
}

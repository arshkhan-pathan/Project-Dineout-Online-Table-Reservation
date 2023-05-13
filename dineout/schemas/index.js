import * as Yup from "yup";

// This schemas will be used for validation

export const registerValidationSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Enter your First Name"),
  last_name: Yup.string().min(2).max(25).required("Enter your Last Name"),
  password: Yup.string().min(6).required("Enter your Password"),
  confirm_password: Yup.string()
    .required("Renter your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginValidationSchema = Yup.object({
  password: Yup.string().min(6).required("Enter your Password"),
});

export const emailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter an valid email address")
    .required("Email address is required"),
});

export const forgotPasswordValidationSchema = Yup.object({
  password: Yup.string().min(6).required("Enter your Password"),
  confirm_password: Yup.string()
    .required("Renter your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

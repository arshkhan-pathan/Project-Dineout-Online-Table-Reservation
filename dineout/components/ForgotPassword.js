import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styles from "@/styles/Login.module.css";
import { TextField, Button, Grid, Typography } from "@mui/material";

export const forgotPasswordValidationSchema = Yup.object({
  password: Yup.string().min(6).required("Enter your Password"),
  confirm_password: Yup.string()
    .required("Renter your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const forrgotPasswordInitialValues = {
  password: "",
  confirm_password: "",
};

const ForgotPassword = ({ tokens }) => {
  const forgotPasswordHandler = async (value) => {
    axios
      .post("http://127.0.0.1:8000/auth/users/reset_password_confirm/", {
        uid: tokens[0],
        token: tokens[1],
        new_password: value.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(value);
  };
  return (
    <div className={styles.body}>
      <div className={styles.parent1}>
        <h1 className={styles.h1}> Forgot Password </h1>
        <Formik
          initialValues={forrgotPasswordInitialValues}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={forgotPasswordHandler}
        >
          <Form className={styles.form}>
            <label className={styles.label}>Password</label>
            <Field name="password" id="password" className={styles.input} />
            <div className={styles.error}>
              <ErrorMessage name="password" />
            </div>

            <label className={styles.label}>Confirm Password</label>
            <Field
              name="confirm_password"
              id="confirm_password"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="confirm_password" />
            </div>

            <input
              style={{ border: "none" }}
              type="submit"
              value="Submit"
              //   class="btn-disabled"
              className={styles.input}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;

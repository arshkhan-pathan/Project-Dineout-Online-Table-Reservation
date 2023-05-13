import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "../../styles/Login.module.css";

import { loginValidationSchema } from "../../schemas";
const loginInitialValues = { password: "" };

const forgotHandler = () => {
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

function Login({ loginHandler, errMsg }) {
  return (
    <>
      {" "}
      <h1 className={styles.h1}>Login </h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={loginHandler}
      >
        <Form className={styles.form}>
          <label className={styles.label}>Password</label>
          <Field name="password" id="password" className={styles.input} />
          <div className={styles.error}>
            <ErrorMessage name="password" />
          </div>
          <p style={{ color: "red" }}>{errMsg}</p>

          <input
            style={{ border: "none" }}
            type="submit"
            value="Sign In"
            //   class="btn-disabled"
            className={styles.input}
          />
          <button
            style={{ border: "none" }}
            className={styles.input}
            onClick={forgotHandler}
          >
            Forgot Password
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;

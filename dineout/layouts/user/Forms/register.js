import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "@/styles/Login.module.css";

import { registerValidationSchema } from "../../../schemas";
const registerInitialValues = {
  first_name: "",
  last_name: "",
  password: "",
  confirm_password: "",
};

function Register({ registerHandler }) {
  return (
    <>
      <h1 className={styles.h1}> Signup </h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={registerHandler}
      >
        <Form className={styles.form}>
          <label className={styles.label}>First Name</label>
          <Field name="first_name" id="first_name" className={styles.input} />
          <div className={styles.error}>
            <ErrorMessage name="first_name" />
          </div>
          <label className={styles.label}>Last Name</label>
          <Field name="last_name" id="last_name" className={styles.input} />
          <div className={styles.error}>
            <ErrorMessage name="last_name" />
          </div>

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
            value="Sign In"
            //   class="btn-disabled"
            className={styles.input}
          />
        </Form>
      </Formik>
    </>
  );
}

export default Register;

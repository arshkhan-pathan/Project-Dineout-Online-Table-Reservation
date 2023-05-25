import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/styles/Login.module.css";
import { emailValidationSchema } from "../../../schemas";

const emailInitialValues = {
  email: "",
};

function Emailcheck({ emailHandler, heading }) {
  return (
    <>
      {" "}
      <div>
        <h1 className={styles.h1}>{heading}</h1>
        <Formik
          initialValues={emailInitialValues}
          validationSchema={emailValidationSchema}
          onSubmit={emailHandler}
        >
          <Form className={styles.form}>
            <label className={styles.label}>Email</label>
            <Field name="email" id="useremail" className={styles.input} />
            <div className={styles.error}>
              <ErrorMessage name="email" />
            </div>

            <input
              style={{ border: "none" }}
              type="submit"
              value="Continue"
              //   class="btn-disabled"
              className={styles.input}
            />
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Emailcheck;

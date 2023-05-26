// packages
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// css
import styles from '@/styles/Login.module.css';


const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter an valid email address')
    .required('Email address is required'),
});

const Form = ({ onSubmit, title }) => {
  return (
    <div>
      <h1 className={styles.h1}>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormikForm className={styles.form}>
          <label className={styles.label}>Email</label>
          <Field name="email" id="useremail" className={styles.input} />
          <div className={styles.error}>
            <ErrorMessage name="email" />
          </div>

          <input
            style={{ border: "none" }}
            type="submit"
            value="Continue"
            className={styles.input}
          />
        </FormikForm>
      </Formik>
    </div>
  );
}

export default Form;

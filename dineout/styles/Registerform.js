// packages
import { useFormik } from 'formik';
// css
import styles from '@/styles/Login.module.css';


const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string(),
  city: Yup.string(),
  email: Yup.string().email('Please enter an valid email address').required('Email address is required'),
  password: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your new password'),
  confirmPassword: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your confirm password').oneOf([Yup.ref('password'), null], 'Passwords does not match'),
});

function Registerform() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.parent1}>
          <h1 className={styles.h1}>Sign Up</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Name</label>
            <input
              autoComplete="off"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="userName"
              className={
                errors.name && touched.name ? styles.inputError : styles.input
              }
            />
            {errors.name && touched.name ? (
              <p className={styles.error}>{errors.name}</p>
            ) : null}

            {/*  */}
            <label className={styles.label}>Email</label>
            <input
              autoComplete="off"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="userEmail"
              className={
                errors.email && touched.email ? styles.inputError : styles.input
              }
            />
            {errors.email && touched.email ? (
              <p className={styles.error}>{errors.email}</p>
            ) : null}
            {/*  */}
            <label>Password</label>
            <div id="show" className={styles.show1}>
              <img
                src="../public/images/eye-slash-solid.svg "
                alt="eye"
                id="eye"
                // onclick="myFunction()"
                className={styles.img}
              />
            </div>

            <input
              className={
                errors.password && touched.password
                  ? styles.inputError
                  : styles.input
              }
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className={styles.error}>{errors.password}</p>
            ) : null}

            {/*  */}
            <label>Confirm Password</label>
            <div id="show" className={styles.show1}>
              <img
                src="../public/images/eye-slash-solid.svg "
                alt="eye"
                id="eye"
                // onclick="myFunction()"
                className={styles.img}
              />
            </div>
            <input
              className={
                errors.password && touched.password
                  ? styles.inputError
                  : styles.input
              }
              type="password"
              autoComplete="off"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className={styles.error}>{errors.confirmPassword}</p>
            ) : null}

            <input
              style={{ border: "none" }}
              type="submit"
              value="SIGN UP"
              //   class="btn-disabled"
              className={styles.input}
            />
            <button type="button" className={styles.button}>
              <img
                src="https://sso.masaischool.com/google.svg"
                alt="google"
                className={styles.img}
              />
              <span className={styles.span}>CONTINUE WITH GOOGLE</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerform;

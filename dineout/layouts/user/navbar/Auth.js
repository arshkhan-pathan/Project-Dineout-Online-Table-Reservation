// packages
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
// store
import { setCredentials } from '@/store/slices/auth';
import { useLoginMutation } from '@/store/api/auth';
//
import Login from './login';
import Register from './Register';
import Form from './Form';


const Auth = () => {
  const [authPage, setAuthPage] = useState('auth');
  const [email, setEmail] = useState('');
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  let router = useRouter();


  const onValidate = (values) => {
    setEmail(values.email);

    //api call to check if user exists!
    axios
      .get(`http://127.0.0.1:8000/api/users/${values.email}`)
      .then(function (response) {
        if (response.status == 200) {
          setAuthPage('login');
        }
      })
      .catch(function (error) {
        console.log('Account does not exist.');
        setAuthPage('register');
      });
  };

  const onLogin = async (values, { setFieldError }) => {
    try {
      const user = await login({ email, password: values.password }).unwrap();
      dispatch(setCredentials({ ...user }));
    } catch (err) {
      if (!err?.status) {
        // isLoading: true until timeout occurs
        setFieldError('No Server Response');
      } else if (err.status === 400) {
        setFieldError('Missing Username or Password');
      } else if (err.status === 401) {
        setFieldError('Unauthorized Incorrect Passowrd');
      } else {
        setFieldError('Login Failed');
        console.log(err);
      }
    }
  };

  const onRegister = (values) => {
    const { firstName, lastName, password, confirmPassword } = values;

    axios
      .post('http://127.0.0.1:8000/api/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password2: confirmPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSendEmail = (values) => {
    // Send Request to Backend For password Reset
    axios
      .post('http://127.0.0.1:8000/auth/users/reset_password/', {
        email: values.email,
      })
      .then(function (response) {
        setAuthPage('message');
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  if (authPage === 'login') return <Login onSubmit={onLogin} setAuthPage={setAuthPage} />;

  if (authPage === 'register') return <Register onSubmit={onRegister} />;

  if (authPage === 'forgotPage') return <Form title={'Forgot Password'} onSubmit={onSendEmail} />;

  if (authPage === 'message') return <div>Password Rest Link has been sent to your mail!</div>;

  return (
    <Form
      onSubmit={onValidate}
      title={'Login / SignUp'}
    />
  );
};

export default Auth;

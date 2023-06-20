// packages
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// store
import { setCredentials } from "@/store/slices/auth";
import { useLoginMutation } from "@/store/api/auth";
//
import Login from "./login";
import Register from "./Register";
import Form from "./Form";
//Snacks

const Auth = ({ onClose }) => {
  const [authPage, setAuthPage] = useState("auth");
  const [email, setEmail] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  let router = useRouter();

  const onValidate = (values) => {
    setEmail(values.email);

    //api call to check if user exists!
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${values.email}`)
      .then(function (response) {
        if (response.status == 200) {
          setAuthPage("login");
        }
      })
      .catch(function (error) {
        console.log("Account does not exist.");
        setAuthPage("register");
      });
  };

  const onLogin = async (values, { setFieldError }) => {
    try {
      const user = await login({ email, password: values.password }).unwrap();
      dispatch(setCredentials({ ...user }));
      toast.success("Successfully Authenticated!");
      console.log(user);
      onClose();
    } catch (err) {
      toast.error("Invalid Credentials");
    }
  };

  const onRegister = (values) => {
    const { firstName, lastName, password, confirmPassword } = values;

    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register/`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password2: confirmPassword,
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 201) {
          console.log("success");
          toast.success("Successfully Authenticated!");
          onClose();
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Some Problem Occured!1");
      });
  };

  const onSendEmail = (values) => {
    // Send Request to Backend For password Reset
    const get = axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/users/reset_password/`, {
        email: values.email,
      })
      .then(function (response) {
        setAuthPage("message");
      })
      .catch(function (error) {
        console.log(error);
      });
    toast.promise(get, {
      loading: "Wait Chef is Sending You Reset Link",
      success: "Please Check Your Mail For Resting Password",
      error: "Error when fetching",
    });
  };

  if (authPage === "login")
    return <Login onSubmit={onLogin} setAuthPage={setAuthPage} />;

  if (authPage === "register") return <Register onSubmit={onRegister} />;

  if (authPage === "forgotPage")
    return <Form title={"Forgot Password"} onSubmit={onSendEmail} />;

  if (authPage === "message")
    return <div>Password Rest Link has been sent to your mail!</div>;

  return <Form onSubmit={onValidate} title={"Login / SignUp"} />;
};

export default Auth;

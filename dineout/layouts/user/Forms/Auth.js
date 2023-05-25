import { useState } from "react";
import axios from "axios";
import Login from "./login";
import Register from "./register";
import Emailcheck from "./emailcheck";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/auth";
import { useLoginMutation } from "@/store/api/auth";
import { useRouter } from "next/router";

const Auth = () => {
  const [authPage, setAuthPage] = useState("auth");
  const [data, setData] = useState({});
  let router = useRouter();

  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const emailHandler = (value) => {
    console.log("Email value: ", value);
    //api call to check if user exists!
    setData({ email: value.email });

    axios
      .get(`http://127.0.0.1:8000/api/users/${value.email}`)
      .then(function (response) {
        if (response.status == 200) {
          console.log("Email in Database");
          setAuthPage("login");
        }
      })
      .catch(function (error) {
        console.log("Email not in Database");
        setAuthPage("register");
      });
  };

  const loginHandler = async (value) => {
    const email = data.email;
    const password = value.password;
    try {
      const userData = await login({ email, password }).unwrap();
      console.log("Sucess Login", userData);
      dispatch(setCredentials({ ...userData }));
      console.log("Login Done");
      router.push("/test");
    } catch (err) {
      if (!err?.status) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized Incorrect Passowrd");
      } else {
        setErrMsg("Login Failed");
        console.log(err);
      }
    }
  };
  const registerHandler = (value) => {
    console.log({
      email: data.email,
      password: value.password,
      password2: value.password2,
    });
    axios
      .post("http://127.0.0.1:8000/api/register/", {
        first_name: value.first_name,
        last_name: value.last_name,
        email: data.email,
        password: value.password,
        password2: value.confirm_password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const forgotHandler = () => {
    setAuthPage("forgotPage");
  };

  const forgotPageHandler = (value) => {
    // Send Request to Backend For password Reset
    console.log(value.email);
    axios
      .post("http://127.0.0.1:8000/auth/users/reset_password/", {
        email: value.email,
      })
      .then(function (response) {
        console.log(response);

        console.log("Password Email Sent");
        setAuthPage("message");
      })
      .catch(function (error) {
        console.log(error);
      });
    // Show Acknowledgment
  };

  if (authPage === "auth") {
    return (
      <Emailcheck
        emailHandler={emailHandler}
        heading={"Login / SignUp"}
        errMsg={errMsg}
      ></Emailcheck>
    );
  }

  if (authPage === "login") {
    return (
      <>
        <Login
          loginHandler={loginHandler}
          forgotHandler={forgotHandler}
          errMsg={errMsg}
        ></Login>
      </>
    );
  }

  if (authPage === "register") {
    return (
      <>
        <Register registerHandler={registerHandler}></Register>
      </>
    );
  }

  if (authPage === "forgotPage") {
    return (
      <>
        <Emailcheck
          heading={"Forgot Password"}
          emailHandler={forgotPageHandler}
        ></Emailcheck>
      </>
    );
  }
  if (authPage === "message") {
    return <>Password Rest Link has been sent to your mail !</>;
  }
};

export default Auth;

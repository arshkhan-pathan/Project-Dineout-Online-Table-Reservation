import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function test() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      test
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  );
}

export default test;

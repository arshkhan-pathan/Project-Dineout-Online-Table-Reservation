import React from "react";
import { useRouter } from "next/router";

import ForgotPassword from "@/components/Forms/ForgotPassword";
import Navbar from "@/components/Navigation/Navbar";

function ResetPassword() {
  const router = useRouter();
  const token = router.query.token;
  let tokens = token?.split("&");

  return (
    <>
      {/* <Navbar></Navbar> */}
      {token}
      <ForgotPassword tokens={tokens}></ForgotPassword>
      {}
    </>
  );
}

export default ResetPassword;

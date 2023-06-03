// packages
import { useRouter } from "next/router";
// layouts

const ResetPassword = () => {
  const router = useRouter();
  const token = router.query.token;
  let tokens = token?.split("&");

  return <>Forgot Page</>;
};

export default ResetPassword;

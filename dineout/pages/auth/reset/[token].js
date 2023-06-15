// packages
import { useRouter } from "next/router";
import ForgotPassword from "@/components/ForgotPassword";
// layouts
import UserLayout from "@/layouts/user";
const ResetPassword = () => {
  const router = useRouter();
  const token = router.query.token;
  let tokens = token?.split("&");
  console.log(tokens);

  return <ForgotPassword tokens={tokens}></ForgotPassword>;
};

export default ResetPassword;

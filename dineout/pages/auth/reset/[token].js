// packages
import { useRouter } from "next/router";
import ForgotPassword from "@/components/ForgotPassword";
// layouts
import UserLayout from "@/layouts/user";
const ResetPassword = () => {
  const router = useRouter();
  const token = router.query.token;
  let tokens = token?.split("&");

  return (
    <UserLayout>
      <ForgotPassword></ForgotPassword>
    </UserLayout>
  );
};

export default ResetPassword;

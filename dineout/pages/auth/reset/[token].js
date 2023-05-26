// packages
import { useRouter } from 'next/router';
// layouts
import ForgotPassword from '@/layouts/user/navbar/auth/ForgotPassword';


const ResetPassword = () => {
  const router = useRouter();
  const token = router.query.token;
  let tokens = token?.split('&');

  return (
    <ForgotPassword tokens={tokens} />
  );
}

export default ResetPassword;

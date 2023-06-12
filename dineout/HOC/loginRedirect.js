import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";

const loginRedirect = (WrappedComponent, link) => {
  return () => {
    const user = useSelector(selectCurrentUser);
    const router = useRouter();

    // Check if the user is authenticated
    if (user) {
      router.replace(link);
      return null;
    }

    // If the user is not authenticated,
    return <WrappedComponent />;
  };
};

export default loginRedirect;

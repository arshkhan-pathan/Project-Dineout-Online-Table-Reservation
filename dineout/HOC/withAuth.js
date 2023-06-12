import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";

const withAuth = (WrappedComponent, allowedRoles, link) => {
  return (props) => {
    // Access the authenticated user and loading state from your authentication library
    const user = useSelector(selectCurrentUser);

    const router = useRouter();

    if (!user) {
      router.push(link);
      return null;
    }

    if (
      allowedRoles &&
      allowedRoles.length > 0 &&
      !allowedRoles.includes(user?.role)
    ) {
      // Redirect to a forbidden page or show an error message if the user role is not allowed
      router.push("/forbidden");
      return null;
    }

    // Render the wrapped component if the user is authenticated and has the necessary role
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

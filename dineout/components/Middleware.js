// authMiddleware.js
import { useRouter } from "next/router";

// Define the roles and their corresponding routes
const roleRoutes = {
  admin: ["/admin"],
  manager: ["/manager"],
  customer: ["/customer"],
};

// Middleware function to check if the user has the required role
export function withRole(role) {
  return (WrappedComponent) => {
    return (props) => {
      const router = useRouter();
      const user = props.user; // Assuming the user object contains authentication information

      // Redirect to the login page if the user is not authenticated
      // if (!user || !user.isAuthenticated) {
      //   // Redirect to the login page or homepage
      //   router.push("/login");
      //   return null; // Return null or a loading component while redirecting
      // }

      const userRole = user.role;

      // Redirect to an appropriate page if the user doesn't have the required role
      if (userRole !== role) {
        // Redirect to access denied page or homepage
        router.push("/access-denied");
        return null; // Return null or a loading component while redirecting
      }

      // Render the wrapped component if the user has the required role
      return <WrappedComponent {...props} />;
    };
  };
}

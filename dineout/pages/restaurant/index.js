import { withRole } from "@/components/Middleware";

const Restaurant = withRole("admin")((userRole = "manager") => {
  return <div>Manage the restaurant</div>;
});

export default Restaurant;

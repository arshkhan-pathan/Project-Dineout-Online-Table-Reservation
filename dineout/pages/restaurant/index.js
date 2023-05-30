import { withRole } from "@/components/Middleware";
import ResponsiveDrawer from "@/components/Dashboard/Drawer";

const Restaurant = () => {
  return (
    <div>
      Manage the restaurant
      <ResponsiveDrawer></ResponsiveDrawer>
    </div>
  );
};

export default Restaurant;

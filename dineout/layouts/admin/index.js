//

import MiniDrawer from "./Drawer";
import PrimarySearchAppBar from "./Appbar";
const AdminLayout = ({ children }) => {
  return (
    <>
      <PrimarySearchAppBar />
      <MiniDrawer />
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;

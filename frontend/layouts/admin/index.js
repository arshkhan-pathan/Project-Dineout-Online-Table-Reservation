//
import { Box } from "@mui/material";
import MiniDrawer from "./Drawer";
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "./Appbar";
import Head from "next/head";
import { useState } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AdminLayout = ({ children, title }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ backgroundColor: "white" }}>
        <PrimarySearchAppBar onToggle={handleDrawerToggle} />
        <Box sx={{ display: "flex" }}>
          <MiniDrawer mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
          <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 }, overflow: "auto" }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AdminLayout;

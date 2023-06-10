//
import { styled, useTheme } from "@mui/material/styles";
import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import { Box } from "@mui/system";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const RestaurantLayout = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <PrimarySearchAppBar />
        <Box sx={{ display: "flex" }}>
          <MiniDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <main>{children}</main>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default RestaurantLayout;

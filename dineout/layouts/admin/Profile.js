import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Avatar from "@mui/material/Avatar";
import Router, { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { logOut } from "@/store/slices/auth";

const Profile = ({ image }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
    toast("Logout Sucess!", {
      icon: "👏",
    });
    router.push("/");
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileCloseUserMenu = () => {
    router.push("/profile");
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Profile settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
          size="small"
          edge="end"
        >
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ width: "37px", height: "37px" }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px", "& .MuiList-root": { width: "150px" } }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/* <MenuItem
            key="profile"
            onClick={handleProfileCloseUserMenu}
            sx={{ padding: "10px" }}
            >
            <Typography fontWeight="bold" textAlign="start">
                Profile
            </Typography>
            </MenuItem> */}

        <MenuItem key="Logout" onClick={logout} sx={{ padding: "10px" }}>
          <Typography fontWeight="bold" textAlign="start">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;

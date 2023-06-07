import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { logOut } from "@/store/slices/auth";

const settings = ["Profile", "Logout"];

const Profile = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
    toast("Logout Sucess!", {
      icon: "👏",
    });
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Profile settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
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
        <MenuItem key="profile" onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>

        <MenuItem key="Logout" onClick={logout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;

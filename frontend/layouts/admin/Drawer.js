import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const PermanentDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const navItems = [
  { label: "Home", href: "/admin/dashboard", icon: <HomeIcon /> },
  { label: "Profile", href: "/admin/profile", icon: <ManageAccountsIcon /> },
  { label: "Pending", href: "/admin/requests", icon: <PendingActionsIcon />, subheader: "Restaurant" },
  { label: "Performance", href: "/admin/performance", icon: <EqualizerIcon /> },
  { label: "Details", href: "/admin/tags", icon: <FormatListNumberedRtlIcon /> },
  { label: "Featured", href: "/admin/featured", icon: <BookmarkIcon /> },
];

export default function MiniDrawer({ mobileOpen, onClose }) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={isMobile ? onClose : handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navItems.map(({ label, href, icon, subheader }) => (
          <React.Fragment key={label}>
            {subheader && (
              <ListSubheader sx={{ fontWeight: "bold" }}>{subheader}</ListSubheader>
            )}
            <Link
              style={{
                textDecoration: "none",
                color: router.pathname === href ? "red" : "inherit",
              }}
              href={href}
              onClick={isMobile ? onClose : undefined}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          </React.Fragment>
        ))}
      </List>
    </>
  );

  if (isMobile) {
    return (
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PermanentDrawer variant="permanent" open={open}>
        {drawerContent}
      </PermanentDrawer>
    </Box>
  );
}

// packages
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// css
import classes from "@/styles/Navbar.module.css";
//
import Login from "./LoginButton";
import { selectCurrentUser } from "@/store/slices/auth.js";
import Profile from "../../../components/profile";
import { useRouter } from "next/router";
import Select from "@/components/Select";
import { useState } from "react";
import {
  selectCurrentLocation,
  setLocation,
} from "@/store/slices/restaurantSlice";
import Notification from "@/components/Notification";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const locations = [
  { id: "Adajan", name: "Adajan" },
  { id: "Vesu", name: "Vesu" },
  { id: "Varacha", name: "Varacha" },
];

const darkSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(240,230,211,0.18)",
    borderRadius: "4px",
    minHeight: "36px",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      borderColor: "rgba(240,230,211,0.38)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgba(240,230,211,0.78)",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(240,230,211,0.35)",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1A1512",
    border: "1px solid rgba(240,230,211,0.1)",
    borderRadius: "4px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "rgba(240,230,211,0.08)" : "transparent",
    color: "#F0E6D3",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    cursor: "pointer",
  }),
  input: (provided) => ({
    ...provided,
    color: "#F0E6D3",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgba(240,230,211,0.35)",
    "&:hover": { color: "rgba(240,230,211,0.65)" },
  }),
};

const lightSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "4px",
    minHeight: "36px",
    boxShadow: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: "var(--font-body)",
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: "var(--font-body)",
    fontSize: "14px",
  }),
};

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const [selectedValue, setSelectedValue] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    dispatch(setLocation(selectedOption));
  };
  const defaultValue = locations.find((option) => option.id === "Adajan");
  const storeValue = useSelector(selectCurrentLocation);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Book a Table", href: "/book-table" },
    { label: "Restaurants", href: "/restaurants" },
  ];

  const mobileDrawer = (
    <Box
      sx={{
        width: 260,
        backgroundColor: "#FFFFFF",
        height: "100%",
      }}
      role="presentation"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ color: "#5A4E44" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "rgba(201,79,53,0.10)" }} />
      <List sx={{ pt: 1 }}>
        {navLinks.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              component={Link}
              href={href}
              onClick={() => setMobileOpen(false)}
              selected={router.pathname === href}
              sx={{
                py: 1.2,
                px: 3,
                "&.Mui-selected": {
                  color: "#C94F35",
                  backgroundColor: "rgba(201,79,53,0.07)",
                },
                "&:hover": {
                  color: "#C94F35",
                  backgroundColor: "rgba(201,79,53,0.05)",
                },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: router.pathname === href ? "#C94F35" : "#3A2E28",
                  fontWeight: router.pathname === href ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "rgba(201,79,53,0.08)", mt: 1 }} />
      <Box sx={{ p: 2, pt: 2.5 }}>
        <Typography
          sx={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#9A8878",
            fontFamily: "var(--font-body)",
            mb: 1,
          }}
        >
          Location
        </Typography>
        <Select
          options={locations}
          placeholder="Select location"
          isMulti={false}
          styles={lightSelectStyles}
          value={selectedValue || storeValue || defaultValue}
          onChange={handleSelectChange}
        />
      </Box>
    </Box>
  );

  return (
    <Box component="header" sx={{ background: "#FFFFFF" }} id="header">
      <div id="nav" className={classes.nav}>
        {/* Logo */}
        <div id="logo" className={classes.logo}>
          <Link legacyBehavior href="/">
            <a>
              <Image
                style={{ boxShadow: "none" }}
                src="https://res.cloudinary.com/dhe9hmzbn/image/upload/v1687778178/website-logo_q0q5yy.png"
                alt="dineout Logo"
                width={100}
                height={35}
              />
            </a>
          </Link>
        </div>

        {/* City select — hidden on mobile */}
        <Box
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          id="city"
          className={classes.city}
        >
          <Select
            className={classes.cityselect}
            options={locations}
            placeholder="Location"
            isMulti={false}
            styles={lightSelectStyles}
            value={selectedValue || storeValue || defaultValue}
            onChange={handleSelectChange}
          />
        </Box>

        {/* Desktop nav links — hidden on mobile */}
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
          id="con"
          className={classes.con}
        >
          <ul className={classes.ul}>
            {navLinks.map(({ label, href }) => (
              <li key={label} className={classes.li}>
                <Link
                  href={href}
                  className={
                    router.pathname === href
                      ? classes.navheadingActive
                      : classes.navheading
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Auth + hamburger */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {user && <Notification />}
          {!user ? <Login /> : <Profile />}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#5A4E44",
            }}
            onClick={() => setMobileOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#FFFFFF" },
        }}
      >
        {mobileDrawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;

import classes from "@/styles/NavbarSecondary.module.css";
import Link from "next/link";
import SearchIcon from "@/components/icons/SearchIcon";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Select from "@/components/Select";
import { useState } from "react";
import { setLocation } from "@/store/slices/restaurantSlice";
import { selectCurrentUser } from "@/store/slices/auth.js";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import Image from "next/image";
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

const locations = [
  { id: "Adajan", name: "Adajan" },
  { id: "Vesu", name: "Vesu" },
  { id: "Varacha", name: "Varacha" },
];

const selectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "5px",
    minHeight: "40px",
    border: "1px solid rgba(201,79,53,0.14)",
    backgroundColor: "#F7F2EC",
    boxShadow: "none",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    "&:hover": { borderColor: "rgba(201,79,53,0.40)" },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1A1210",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9A8878",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    backgroundColor: state.isFocused ? "rgba(201,79,53,0.07)" : "white",
    color: "#1A1210",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

const Navbar = () => {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSearchSubmit = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    router.push(`/restaurants/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    dispatch(setLocation(selectedOption));
  };

  const getRedirectLink = () => {
    const role = user?.role;
    if (role == 1) router.push("/admin");
    else if (role == 2) router.push("/restaurant");
    else if (role == 3) router.push("/profile");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const selectedLocationValue = useSelector(selectCurrentLocation);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Book a Table", href: "/book-table" },
    { label: "Restaurants", href: "/restaurants" },
  ];

  const mobileDrawer = (
    <Box sx={{ width: 260, backgroundColor: "#FFFFFF", height: "100%" }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#5A4E44" }}>
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
                "&.Mui-selected": { color: "#C94F35", backgroundColor: "rgba(201,79,53,0.07)" },
                "&:hover": { color: "#C94F35", backgroundColor: "rgba(201,79,53,0.05)" },
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
        {!user && (
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/restaurant/login"
              onClick={() => setMobileOpen(false)}
              sx={{ py: 1.2, px: 3, "&:hover": { color: "#C94F35" } }}
            >
              <ListItemText
                primary="Restaurant Login"
                primaryTypographyProps={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#3A2E28" }}
              />
            </ListItemButton>
          </ListItem>
        )}
        {user && (
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => { getRedirectLink(); setMobileOpen(false); }}
              sx={{ py: 1.2, px: 3, "&:hover": { color: "#C94F35" } }}
            >
              <ListItemText
                primary="Profile"
                primaryTypographyProps={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#3A2E28" }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Divider sx={{ borderColor: "rgba(201,79,53,0.08)", mt: 1 }} />
      <Box sx={{ p: 2, pt: 2.5 }}>
        <Typography sx={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8878", fontFamily: "var(--font-body)", mb: 1 }}>
          Location
        </Typography>
        <Select
          options={locations}
          placeholder="Select location"
          isMulti={false}
          styles={selectStyles}
          value={selectedValue || selectedLocationValue}
          onChange={handleSelectChange}
        />
      </Box>
      {/* Mobile search */}
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8878", fontFamily: "var(--font-body)", mb: 1 }}>
          Search
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search restaurants..."
            style={{
              flex: 1,
              padding: "8px 12px",
              border: "1px solid rgba(201,79,53,0.14)",
              borderRadius: 5,
              fontSize: 14,
              outline: "none",
              fontFamily: "var(--font-body)",
              backgroundColor: "#F7F2EC",
            }}
          />
          <button
            onClick={handleSearchSubmit}
            style={{
              background: "#C94F35",
              color: "white",
              border: "none",
              borderRadius: 5,
              padding: "8px 14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              whiteSpace: "nowrap",
            }}
          >
            Go
          </button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div className={classes.body}>
      <div className={classes.inner_page_header}>

        {/* ── Mobile top bar ── */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            height: 60,
          }}
        >
          <Link href="/" legacyBehavior>
            <a><Image src="https://res.cloudinary.com/dhe9hmzbn/image/upload/v1687778178/website-logo_q0q5yy.png" alt="dineout" width={100} height={35} /></a>
          </Link>
          <IconButton onClick={() => setMobileOpen(true)} aria-label="open menu" sx={{ color: "#5A4E44" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* ── Desktop header row ── */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className={classes.header_section1}>
            <div className={classes.logo_section}>
              <Link href="/" legacyBehavior>
                <a><Image src="https://res.cloudinary.com/dhe9hmzbn/image/upload/v1687778178/website-logo_q0q5yy.png" alt="" width={100} height={35} /></a>
              </Link>
            </div>
            <div className={classes.location_section}>
              <Select
                options={locations}
                placeholder="Location"
                isMulti={false}
                styles={selectStyles}
                value={selectedValue || selectedLocationValue}
                onChange={handleSelectChange}
              />
            </div>
            <div className={classes.search_section}>
              <SearchIcon width={16} height={16} style={{ color: "#9A8878", flexShrink: 0 }} />
              <input
                type="text"
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                placeholder="Search restaurants, cuisines, offers..."
              />
            </div>
            <div className={classes.search_button}>
              <button onClick={handleSearchSubmit}>Search</button>
            </div>
          </div>
        </Box>

        {/* ── Desktop nav links ── */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className={classes.header_section2}>
            <div className={classes.list}>
              <Link href="/" legacyBehavior>
                <p className={router.pathname === "/" ? classes.pActive : classes.p}>Home</p>
              </Link>
              <Link href="/book-table" legacyBehavior>
                <p className={router.pathname === "/book-table" ? classes.pActive : classes.p}>Book a Table</p>
              </Link>
              <Link href="/restaurants" legacyBehavior>
                <p className={router.pathname === "/restaurants" ? classes.pActive : classes.p}>Restaurants</p>
              </Link>
              {!user && (
                <Link href="/restaurant/login" legacyBehavior>
                  <p className={router.pathname === "/restaurant/login" ? classes.pActive : classes.p}>Restaurant Login</p>
                </Link>
              )}
              {user && (
                <p onClick={getRedirectLink} className={classes.p} style={{ cursor: "pointer" }}>
                  Profile
                </p>
              )}
            </div>
          </div>
        </Box>

      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { backgroundColor: "#FFFFFF" } }}
      >
        {mobileDrawer}
      </Drawer>
    </div>
  );
};

export default Navbar;

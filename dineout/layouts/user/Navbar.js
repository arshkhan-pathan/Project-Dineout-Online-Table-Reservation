import React from "react";
import Link from "next/link";
import Modalmui from "@/components/ui/Modalmui";
import Auth from "@/components/Forms/Auth";
import classes from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.body}>
      <header id="header" className={classes.header}>
        <div id="nav" className={classes.nav}>
          <div id="logo" className={classes.logo}>
            <Link legacyBehavior href="/">
              <a>
                <img
                  style={{ boxShadow: "none" }}
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                  alt="dineout Logo"
                  classes={classes.aimg}
                />
              </a>
            </Link>
          </div>
          <div id="city" className={classes.city}>
            <div id="location" className={classes.location}>
              <img
                id="loc"
                src="location_logo.png"
                alt=""
                className={classes.loc}
              />
            </div>
            <select
              className={classes.cityselect}
              name=""
              aria-placeholder="Please type a location"
            >
              <option id="Delhi">Delhi</option>
              <option value="Rajauri Garden">Mumbai</option>
              <option value="Sector 29, Gurgaon">Pune</option>
              <option value="DLF Cyber City, Gurgaon">Benglore</option>
            </select>
          </div>

          <div id="con" className={classes.con}>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Link href="" className={classes.navheading}>
                  Home
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="" className={classes.navheading}>
                  Book a Table
                </Link>
              </li>

              <li className={classes.li}>
                <Link href="/restaurants" className={classes.navheading}>
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>
          <div id="loginD" className={classes.loginD}>
            <button id="login" className={classes.login} onClick={handleOpen}>
              Login
            </button>
            {
              <Modalmui
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
              >
                {/* <Loginform></Loginform> */}
                <Auth />
              </Modalmui>
            }
          </div>
        </div>
      </header>

      <div id="bigImage" className={classes.bigImage}>
        <div id="imgCon" className={classes.imgCon}>
          <h1 className={classes.imgConh1}>
            It's Now Safe To <span style={{ color: "#ff645a" }}>Crave!</span>
          </h1>
        </div>

        <div id="serachbar" className={classes.serachbar}>
          <div>
            <img
              className={classes.searchLogo}
              style={{ fontSize: "20px" }}
              src="serchlogo.png"
              alt=""
            />
          </div>
          <input
            type="text"
            id="search"
            className={classes.search}
            placeholder="Search for Restaurants, Cuisines, Location..."
          />
          <button type="submit" id="searchBut" className={classes.searchBut}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

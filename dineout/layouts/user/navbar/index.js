// packages
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// css
import classes from "@/styles/Navbar.module.css";
//
import Login from "./LoginButton";
import { selectCurrentUser } from "@/store/slices/auth.js";
import Profile from "./profile";
import { useRouter } from "next/router";
import Select from "@/components/Select";
import { useState } from "react";
import {
  selectCurrentLocation,
  setLocation,
} from "@/store/slices/restaurantSlice";

const locations = [
  {
    id: "Adajan",
    name: "Adajan",
  },
  {
    id: "Vesu",
    name: "Vesu",
  },
  {
    id: "Varacha",
    name: "Varacha",
  },
];

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectChange = (selectedOption) => {
    console.log("Selected value:", selectedOption);
    setSelectedValue(selectedOption);
    dispatch(setLocation(selectedOption));
  };
  const defaultValue = locations.find((option) => option.id === "Adajan");
  const storeValue = useSelector(selectCurrentLocation);
  console.log(router.pathname);
  return (
    <header id="header">
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
          <Select
            className={classes.cityselect}
            options={locations}
            placeholder="Please type a location"
            isMulti={false}
            styles={{ width: "100%" }}
            value={selectedValue || storeValue || defaultValue}
            onChange={handleSelectChange}
          />
        </div>

        <div id="con" className={classes.con}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link
                href=""
                className={
                  router.pathname == "/"
                    ? classes.navheadingActive
                    : classes.navheading
                }
              >
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
        {!user ? <Login /> : <Profile image={user?.image} />}
      </div>
      {console.log(user)}
    </header>
  );
};

export default Navbar;

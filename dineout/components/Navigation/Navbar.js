import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modalmui from "../ui/Modal";
import Auth from "../Forms/Auth";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <header id="header">
        <div id="nav">
          <div id="logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  style={{ "box-shadow": "none" }}
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                  alt="dineout Logo"
                />
              </a>
            </Link>
          </div>
          <div id="city">
            <div id="location">
              <img id="loc" src="location_logo.png" alt="" />
            </div>
            <select
              className="location"
              name=""
              aria-placeholder="Please type a location"
            >
              <option id="Delhi">Delhi</option>
              <option value="Rajauri Garden">Mumbai</option>
              <option value="Sector 29, Gurgaon">Pune</option>
              <option value="DLF Cyber City, Gurgaon">Benglore</option>
            </select>
          </div>

          <div id="con">
            <ul>
              <li>
                <a className="navheading" href="">
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a className="navheading" href="./login/login.html">
                  Book a table
                </a>
              </li>

              <li>
                <a className="navheading" href="./login/login.html">
                  Restaurants
                </a>
              </li>
            </ul>
          </div>
          <div id="loginD">
            <button id="login" onClick={handleOpen}>
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

      <div id="bigImage">
        <div id="imgCon">
          <h1>
            It's Now Safe To <span style={{ color: "#ff645a" }}>Crave!</span>
          </h1>
        </div>

        <div id="serachbar">
          <div>
            <img
              className="searchLogo"
              style={{ "font-size": "20px" }}
              src="serchlogo.png"
              alt=""
            />
          </div>
          <input
            type="text"
            id="search"
            placeholder="Search for Restaurants, Cuisines, Location..."
          />
          <button type="submit" id="searchBut">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

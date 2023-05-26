// packages
import Link from 'next/link';
// css
import classes from '@/styles/Navbar.module.css';
//
import Login from './LoginButton';


const Navbar = () => {
  return (
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
        <Login />
      </div>
    </header>
  );
};

export default Navbar;

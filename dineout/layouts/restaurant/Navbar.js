// css
import classes from "@/styles/NavbarSecondary.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Select from "@/components/Select";
import { useState } from "react";
import { setLocation } from "@/store/slices/restaurantSlice";
import { selectCurrentUser } from "@/store/slices/auth.js";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";


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
    id: "Varachha",
    name: "Varachha",
  },
];

const Navbar = () => {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch=useDispatch()
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const search =searchQuery;
    console.log(encodeURIComponent(search));
    router.push(`restaurants/search?q=${encodeURIComponent(search)}`);
  };

  const handleSelectChange = (selectedOption) => {
    console.log('Selected value:', selectedOption);
    setSelectedValue(selectedOption);
    dispatch(setLocation(selectedOption));

  }; 

  
  
  const handleSearchChange = (e) => {
    console.log('query value:', e.target.value);
    setSearchQuery(e.target.value)

  };

  const selectedLocationValue=useSelector(selectCurrentLocation)

  return (
    <div className={classes.body}>
      <div className={classes.inner_page_header}>
        <div className={classes.header_section1}>
          <div className={classes.logo_section}>
            <Link href="/" legacyBehavior>
              <img
                className={classes.pageLogo}
                src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt=""
                width="100px"
              />
            </Link>
          </div>

          <div className={classes.location_section}>
            <i className="fas fa-map-marker-alt"></i>
        
            <Select
           
            options={locations}
            placeholder="Please type a location"
            isMulti={false}
            styles={{ width: "100%" }}
            value={selectedValue || selectedLocationValue }
            onChange={handleSelectChange}
         
          
          />
          </div>
          <div className={classes.search_section}>
            <i className={classes.fa_search}></i>
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search restaurants, Offers, Deals or Events... "
            />
          </div>
          <div className={classes.search_button}>
            <button onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
        <div className={classes.horizontal_line}></div>
        <div className={classes.header_section2}>
          <div className={classes.list}>
            <Link href="/" legacyBehavior>
              <p className={classes.p}>Home</p>
            </Link>
            <Link href="/restaurant/manage" legacyBehavior>
              <p className={classes.p}>Book a Table</p>
            </Link>
            <Link href="/restaurants" legacyBehavior>
              <p
                className={
                  router.pathname == "/restaurants"
                    ? classes.pActive
                    : classes.p
                }
              >
                Restaurants
              </p>
            </Link>
            {!user && (
              <Link href="/restaurant/login" legacyBehavior>
                <p
                  className={
                    router.pathname == "/restaurant/login"
                      ? classes.pActive
                      : classes.p
                  }
                >
                  Restaurant Login
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

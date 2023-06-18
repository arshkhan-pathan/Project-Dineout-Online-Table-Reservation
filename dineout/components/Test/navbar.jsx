import Link from "next/link";
import classes from "./navbar.module.css";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <div className={classes.box}>
        <div>
          <img
            style={{ width: "110px" }}
            src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
            alt="logo"
          />
        </div>
        <div>
          <>Multiple</>
        </div>
        <div>
          <input
            className={classes.search}
            placeholder="Search for Restaurants, Cuisines ,Location..."
            type="text"
          />
          <Button
            sx={{
              backgroundColor: " rgb(252, 97, 97)",
              width: "100px",
              textTransform: "lowercase",
              fontWeight: "700",
            }}
            variant="contained"
            size="small"
            color="error"
          >
            Search
          </Button>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Button
              sx={{
                backgroundColor: " rgb(252, 97, 97)",
                width: "100px",
                textTransform: "lowercase",
                fontWeight: "700",
              }}
              variant="contained"
              size="small"
              color="error"
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: " rgb(252, 97, 97)",
                width: "100px",
                textTransform: "lowercase",
                fontWeight: "700",
              }}
              variant="contained"
              size="small"
              color="error"
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.links}>
        <div>
          <>Home</>
        </div>
        <div>
          <Link href="/book-table">Book a table</Link>
        </div>
        <div>
          <>Dineout Pay</>
        </div>
        <div>
          <>Dineout Passport</>
        </div>
        <div>
          <>Booking Details</>
        </div>
      </div>
    </>
  );
}

export default Navbar;

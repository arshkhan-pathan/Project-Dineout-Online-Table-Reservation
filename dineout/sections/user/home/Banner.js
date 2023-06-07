import classes from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
const Banner = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    console.log(encodeURIComponent(searchQuery));
    router.push(`restaurants/search?q=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <div id="bigImage" className={classes.bigImage}>
      <div id="imgCon" className={classes.imgCon}>
        <h1 className={classes.imgConh1}>
          It's Now Safe To <span style={{ color: "#ff645a" }}>Crave!</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Banner;

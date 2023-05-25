import classes from '@/styles/Navbar.module.css';

const Banner = () => {
  return (
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
  );
};

export default Banner;

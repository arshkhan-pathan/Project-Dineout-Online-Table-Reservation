// css
import classes from '@/styles/NavbarSecondary.module.css';


const Navbar = () => {
    return (
        <div className={classes.body}>
            <div classname={classes.inner_page_header}>
                <div className={classes.header_section1}>
                    <div className={classes.logo_section}>
                        <img
                            className={classes.pageLogo}
                            src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                            alt=""
                            width="100px"
                        />
                    </div>

                    <div className={classes.location_section}>
                        <i class="fas fa-map-marker-alt"></i>
                        <select
                            name=""
                            id="select_location"
                            className={classes.select_location}
                        >
                            <option value="hyderabad">Hyderabad</option>
                            <option value="delhi">Dehli</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="chennai">Chennai</option>
                            <option value="kolkata">Kolkata</option>
                        </select>
                    </div>
                    <div className={classes.search_section}>
                        <i class={classes.fa_search}></i>
                        <input
                            type="text"
                            placeholder="Search restaurants, Offers, Deals or Events... "
                        />
                    </div>
                    <div className={classes.search_button}>
                        <button>Search</button>
                    </div>
                </div>
                <div className={classes.horizontal_line}></div>
                <div className={classes.header_section2}>
                    <div className={classes.list}>
                        <p className={classes.p}>Home</p>
                        <p className={classes.p}>Book A Table</p>
                        <p className={classes.p}>Dineout Pay</p>
                        <p className={classes.p}>Restaurant Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

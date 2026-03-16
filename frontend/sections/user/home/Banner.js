import styles from "@/styles/Banner.module.css";
import { useRouter } from "next/router";
import SearchIcon from "@/components/icons/SearchIcon";

const Banner = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    router.push(`restaurants/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Discover · Reserve · Dine</span>
        <h1 className={styles.headline}>
          It&apos;s Now Safe<br />
          To <span className={styles.accent}>Crave!</span>
        </h1>
        <p className={styles.subtext}>
          Find the finest restaurants and book a table in seconds
        </p>

        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <div className={styles.searchBar}>
            <SearchIcon className={styles.searchIcon} />
            <input
              type="text"
              id="search"
              name="search"
              className={styles.searchInput}
              placeholder="Search for restaurants, cuisines, location..."
            />
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </div>
        </form>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Banner;

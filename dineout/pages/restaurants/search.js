// pages/search.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query; // Retrieve the search query from the URL

  const [searchResults, setSearchResults] = useState([]);

  return <div>{q}</div>;
};

export default SearchPage;

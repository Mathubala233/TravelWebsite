import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const maxPrice = searchParams.get("maxPrice");

  React.useEffect(() => {
    // Fetch the search results based on the search parameters
    // Example: fetchSearchResults(destination, date, maxPrice);
    console.log("Fetching search results for:", {
      destination,
      date,
      maxPrice,
    });
  }, [destination, date, maxPrice]);

  return (
    <div className="p-4">
      <h1>Search Results</h1>
      <p>Destination: {destination}</p>
      <p>Date: {date}</p>
      <p>Max Price: ${maxPrice}</p>
      {/* Render the search results here */}
    </div>
  );
};

export default SearchResults;

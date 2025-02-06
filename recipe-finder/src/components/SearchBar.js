import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchRecipes(query.trim())); // Trim spaces to avoid errors
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
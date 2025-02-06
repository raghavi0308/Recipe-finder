import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "./redux/recipeSlice";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Recipe Finder</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
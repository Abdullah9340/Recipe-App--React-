import "./App.css";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

function App() {
  const id = "e4dfe00f";
  const key = "ffa7ebcd52c1fbe7c4ee39a949d225e9";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("Chicken");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="mainBody">
      <div className="header">
        <p>Recipe Search!</p>
        <div className="searchSection">
          <input
            type="searchbar"
            id="searchBar"
            value={search}
            onChange={updateSearch}
          />
          <input
            id="searchButton"
            type="button"
            value="submit"
            onClick={getSearch}
          />
        </div>
      </div>
      {recipe.map((sample_recipe) => (
        <Recipe
          key={sample_recipe.recipe.label}
          title={sample_recipe.recipe.label}
          calories={sample_recipe.recipe.calories}
          image={sample_recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;

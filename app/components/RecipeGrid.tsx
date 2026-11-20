"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matchingRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <div className="recipe-search">
        <label className="recipe-search__label" htmlFor="recipe-search-input">
          Search recipes
        </label>
        <div className="recipe-search__field">
          <span aria-hidden="true">⌕</span>
          <input
            id="recipe-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by recipe or cuisine..."
          />
        </div>
      </div>

      {matchingRecipes.length > 0 ? (
        <div className="recipe-grid">
          {matchingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="recipe-empty">
          No recipes found. Try another dish or cuisine.
        </p>
      )}
    </>
  );
}

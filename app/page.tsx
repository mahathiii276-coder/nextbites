import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="hero__eyebrow">Fresh ideas for every table</p>
        <h1>Find your next bite.</h1>
        <p className="hero__description">
          Explore comforting classics and colorful favorites, all in one place.
        </p>
      </section>

      <section className="recipes-section" aria-label="Recipe collection">
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}

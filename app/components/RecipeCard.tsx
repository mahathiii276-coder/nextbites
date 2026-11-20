import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__top">
        <span className="recipe-card__emoji" role="img" aria-label={recipe.cuisine}>
          {recipe.emoji}
        </span>
        <span
          className={`difficulty difficulty--${recipe.difficulty.toLowerCase()}`}
        >
          {recipe.difficulty}
        </span>
      </div>

      <div className="recipe-card__content">
        <p className="recipe-card__cuisine">{recipe.cuisine}</p>
        <h2>{recipe.title}</h2>
        <p className="recipe-card__time">
          <span aria-hidden="true">◷</span>
          {recipe.minutes} minutes
        </p>
      </div>
    </article>
  );
}

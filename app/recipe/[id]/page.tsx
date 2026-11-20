import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: String(recipe.id) }));
}

export const dynamicParams = false;

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="page-shell recipe-detail-shell">
      <Link className="recipe-back-link" href="/">
        <span aria-hidden="true">←</span> All recipes
      </Link>

      <article className="recipe-detail">
        <header className="recipe-detail__hero">
          <span className="recipe-detail__emoji" role="img" aria-label={recipe.cuisine}>
            {recipe.emoji}
          </span>
          <p className="recipe-card__cuisine">{recipe.cuisine}</p>
          <h1>{recipe.title}</h1>
          <div className="recipe-detail__meta">
            <span
              className={`difficulty difficulty--${recipe.difficulty.toLowerCase()}`}
            >
              {recipe.difficulty}
            </span>
            <span className="recipe-detail__time">
              <span aria-hidden="true">◷</span>
              {recipe.minutes} minutes
            </span>
          </div>
        </header>

        <div className="recipe-detail__body">
          <section className="recipe-detail__section">
            <h2>Ingredients</h2>
            <ul className="recipe-ingredients">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="recipe-detail__section">
            <h2>How to make it</h2>
            <ol className="recipe-steps">
              {recipe.steps.map((step, index) => (
                <li key={`${index}-${step}`}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}

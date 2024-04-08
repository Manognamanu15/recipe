import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeInfo(props) {
  const { recipe } = props;
  return (
    <>
      <h1>{recipe.name}</h1>
      <h1>{recipe.username}</h1>
      <h1>{recipe.description}</h1>
      <img src={recipe.image} alt="food-image" />
    </>
  );
}
export default function DetailedRecipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const serverUrl = `http://127.0.0.1:5700/recipes`;
  useEffect(() => {
    fetch(serverUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data); // {error: "Recipe not found"} or {name: "string", ingredients: ["string"], instructions: ["string"]}
      });
  }, []);
  return (
    <>
      <h1>this is recipe instructions page for recipe {recipeId}</h1>
      <div>
        {recipe === null ? (
          "Loading..."
        ) : recipe.error ? (
          "Recipe not found"
        ) : (
          <RecipeInfo recipe={recipe} />
        )}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./header";
import Card from "./card";

const url = "http://127.0.0.1:5800/recipes";

export default function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);

  const changeRecipe = (type) => {
    setSearchParams({ type: type });
  };
  const recipeType = searchParams.get("type");
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);
  useEffect(() => {
    console.log("Component mounted for the first time");
  }, []);
  useEffect(() => {
    console.log("Recipe type changed");
  }, [recipeType]);
  return (
    <>
      <Header type={recipeType} changeRecipe={changeRecipe} />
      {/* <Counter /> */}
      <div className="grid grid-cols-4 gap-6 p-8">
        {
          // [Card, Card]
          recipes.map((recipe, index) => {
            if (recipeType === recipe.type || recipeType === "all") {
              return <Card key={index} recipe={recipe} />;
            }
          })
        }
      </div>
    </>
  );
}

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./header";
import Card from "./card";
import { AuthContext } from "../context/authContext";
const url = "https://widespread-mellisent-vj0.koyeb.app/recipes";

export default function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const { token } = useContext(AuthContext);
  const changeRecipe = (type) => {
    setSearchParams({ type: type });
  };
  const recipeType = searchParams.get("type") || "all";
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
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
      <div className="grid grid-cols-4 gap-6 p-8">
        {recipes.map((recipe, index) => {
          if (recipeType === recipe.type || recipeType === "all") {
            return <Card key={index} recipe={recipe} />;
          }
        })}
      </div>
    </>
  );
}

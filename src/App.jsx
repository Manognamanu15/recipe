import NavBar from "./components/navbar";
import Header from "./components/header";
import Card from "./components/card";
import { useEffect, useState } from "react";

const url = "https://widespread-mellisent-vj0.koyeb.app/signup";

function App() {
  const [recipeType, setRecipeType] = useState("all");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Component mounted for the first time");
  }, []);

  useEffect(() => {
    console.log("Recipe type changed");
  }, [recipeType]);
  console.log("App component rendered");

  return (
    <>
      <NavBar />
      <Header type={recipeType} changeRecipe={setRecipeType} />
      <div className="grid grid-cols-4 gap-6 p-8">
        {recipes.map((recipe, index) => {
          if (recipeType === recipe.type || recipeType === "all") {
            return <Card key={index} recipe={recipe} />;
          }
          return null; // Add a return statement to make React happy
        })}
      </div>
    </>
  );
}

export default App;

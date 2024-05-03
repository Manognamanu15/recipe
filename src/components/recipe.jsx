import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
function RecipeInfo(props) {
  const { recipe } = props;
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="font-semibold text-4xl my-2 border-b-4 pb-2 border-indigo-300 w-fit">
        {recipe.name}
      </h1>
      <div>
        <img
          src={recipe.image}
          alt="food-image"
          className="object-cover w-full h-[330px]"
        />
        <div className="flex gap-4 bg-slate-200 p-4 mt-1 rounded-sm">
          <p className="flex-grow">
            <span className="font-semibold">Category:</span>
            <span>{recipe.type}</span>
          </p>
          <p>
            <span className="font-semibold">Time:</span>
            <span>{recipe.time} Min</span>
          </p>
          <p>
            <span className="font-semibold">Serves:</span>
            <span>{recipe.servers}</span>
          </p>
        </div>
      </div>
      <div className="family-sans my-4">
        <h1 className="font-semibold text-3xl">Description</h1>
        <p>{recipe.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-1 mt-14">
        <section>
          <h1 className="font-medium text-2xl">Ingredients List</h1>
          <ul className="list-disc">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="col-span-2">
          <h1 className="font-medium text-2xl">Preparation</h1>
          <ol className="list-decimal">
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <CommentSection />
    </div>
  );
}

function CommentSection() {
  return (
    <>
      <div className="border-t border-indigo-300">
        <h1 className="font-semibold text-2xl">Comments(4)</h1>
      </div>
    </>
  );
}
export default function DetailedRecipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const serveUrl = `https://widespread-mellisent-vj0.koyeb.app/recipes/${recipeId}`;
  const { token } = useContext(AuthContext);
  useEffect(() => {
    fetch(serveUrl, {
      headers: {
        Authorizatioh: "Bearer" + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      });
  }, []);

  return (
    <>
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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/home.jsx";
import Root from "./routes/root.jsx";
import Recipes from "./components/recipes_home.jsx";
import DetailedRecipe from "./components/recipe.jsx";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomeRoute />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/:recipeld",
        element: <DetailedRecipe />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

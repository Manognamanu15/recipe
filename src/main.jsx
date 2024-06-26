import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/home.jsx";
import Root from "./routes/root.jsx";
import Recipes from "./components/recipes_home.jsx";
import DetailedRecipe from "./components/recipe.jsx";
import AddRecipe from "./routes/add_recipe.jsx";
import Auth from "./routes/auth.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import ProtectedRoute from "./components/protected_route.jsx";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <HomeRoute />
          </ProtectedRoute>
        ),
      },
      {
        path: "recipes",
        element: (
          <ProtectedRoute>
            <Recipes />
          </ProtectedRoute>
        ),
      },
      {
        path: "recipes/:recipeld",
        element: <DetailedRecipe />,
      },
      {
        path: "add",
        element: <AddRecipe />,
      },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={browserRouter} />
    </AuthProvider>
  </React.StrictMode>
);

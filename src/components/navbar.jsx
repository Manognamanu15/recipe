import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pageStyle = "cursor-pointer border-b-4 border-indigo-300";
  const pointer = "cursor-pointer";
  function handleClick(page) {
    setCurrentPage(page);
  }
  const homeClick = () => {
    handleClick("Home");
  };
  const recipesClick = () => {
    handleClick("Recipes");
  };
  const addClick = () => {
    handleClick("Add");
  };
  console.log("Rendered NavBar");
  return (
    <>
      <div className="flex justify-between p-4">
        <h1>React Recipies</h1>
        <ul className="flex gap-2">
          <li
            className={currentPage === "Home" ? pageStyle : pointer}
            onClick={homeClick}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={currentPage === "Recipes" ? pageStyle : pointer}
            onClick={recipesClick}
          >
            <Link to="/recipes">Recipes</Link>
          </li>
          <li
            className={currentPage === "Add" ? pageStyle : pointer}
            onClick={addClick}
          >
            <Link to="/add">Add Recipes</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;

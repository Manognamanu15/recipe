import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
export default function Root() {
  const { theme } = useContext(ThemeContext);
  const darkTheme = "bg-gray-800 text-white min-h-screen";
  const lightTheme = "bg-white text-black min-h-screen";
  return (
    <>
      <div className={theme === "dark" ? darkTheme : lightTheme}>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

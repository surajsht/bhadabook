import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [enableNav, setEnableNav] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="container hidden py-8 lg:block">
        <div className="flex items-center justify-between">
          <h1 className="font-lily text-3xl font-bold text-primary">
            <Link to="/dashboard">BhadaBook</Link>
          </h1>

          <ul className="flex items-center gap-10">
            <li> Dashboard </li>
            <li> Tenant </li>
            <li> Records </li>
            <li> Expenses </li>
          </ul>

          <div
            className="flex cursor-pointer select-none items-center"
            onClick={toggleTheme}
          >
            <div
              className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                isDarkMode ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isDarkMode ? "translate-x-5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar */}

      <div className="container relative py-8 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-lily text-3xl font-bold text-primary">
            BhadaBook
          </h1>

          <div
            className="ml-auto flex cursor-pointer select-none items-center"
            onClick={toggleTheme}
          >
            <div
              className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                isDarkMode ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isDarkMode ? "translate-x-5" : ""
                }`}
              ></span>
            </div>
          </div>

          <button className="text-2xl" onClick={() => setEnableNav(true)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`fixed bottom-0 top-0 h-full w-full bg-slate-200 p-8 pt-20 transition-all duration-300 sm:w-56 ${enableNav ? "right-0" : "-right-full sm:-right-[14rem]"} z-50 dark:bg-[#121212]`}
        >
          <ul className="flex flex-col gap-6">
            <li> Dashboard </li>
            <li> Tenant </li>
            <li> Records </li>
            <li> Expenses </li>
          </ul>

          <button
            className="absolute left-8 top-6 z-10"
            onClick={() => setEnableNav(false)}
          >
            <ImCross />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

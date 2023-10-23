import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";
import DarkModeSliderButton from "./DarkModeSliderButton";
import { fetchRequest } from "./api.js";

const Header = ({ setImg }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={isDarkMode ? "dark-mode h-full" : "light-mode w-full"}>
      <div className="flex gap-2 items-center justify-around p-3 ">
        <h1 className="text-3xl font-extrabold cursor-pointer">
          Image Gallery
        </h1>
        <form
          className={
            isDarkMode
              ? " bg-[#535151] p-3 rounded-lg flex items-center"
              : " bg-slate-100  p-3 rounded-lg flex items-center"
          }
        >
          <input
            type="text"
            placeholder="Search for images..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            onChange={(e) => setImg(e.target.value)}
          />
          <FaSearch className="text-slate-600 cursor-pointer hover:scale-[1.3] ease-in duration-100" />
        </form>
        <div className="flex gap-3 p-2">
          <h3 className="text-sm font-semibold">Explore</h3>
          <h3 className="text-sm font-semibold">Collection</h3>
          <h3 className="text-sm font-semibold">Community</h3>
        </div>
        <DarkModeSliderButton
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;

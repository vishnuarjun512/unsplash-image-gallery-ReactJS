import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useDarkMode } from "./DarkModeContext";
import DarkModeSliderButton from "./DarkModeSliderButton";

const Header = ({ setImg }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("isDropdownOpen:", isDropdownOpen);
  };

  return (
    <header className={isDarkMode ? "dark-mode h-full" : "light-mode w-full"}>
      <div className="grid grid-cols-3 md:grid-cols-5 p-2 mx-3 md:mx-5">
        <h1 className="text-xl md:text-3xl font-extrabold cursor-pointer col-span-2 md:col-span-1 flex justify-start md:justify-center items-center">
          Image Gallery
        </h1>
        <div className="hidden md:flex items-center justify-around col-span-4">
          <form
            className={`${
              isDarkMode ? "bg-[#535151]" : " bg-slate-100"
            }  p-3 rounded-lg flex items-center `}
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
        <div className="md:hidden grid-cols-1 flex items-center justify-end gap-2">
          <FaSearch className="text-slate-600 cursor-pointer hover:scale-[1.3] ease-in duration-100" />
          <AiOutlineMenu onClick={toggleDropdown} />
          <div
            className={`dropdown rounded-lg ${isDropdownOpen ? "open" : ""}`}
          >
            <div className="hover:bg-white text-sm hover:text-black duration-400 ease-in-out rounded-lg p-2">
              Explore
            </div>
            <div className="hover:bg-white text-sm hover:text-black duration-400 ease-in-out rounded-lg p-2">
              Collection
            </div>
            <div className="hover:bg-white text-sm hover:text-black duration-400 ease-in-out rounded-lg p-2">
              Community
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

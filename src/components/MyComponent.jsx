import React, { useState } from "react";
import { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import Background from "../assets/background.jpg";
import { FaSearch } from "react-icons/fa";
import ImageDisplay from "./ImagePopup";
import ImageCard from "./ImageCard";

const MyComponent = ({ res, setImg }) => {
  const { isDarkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  });

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={`${
        isDarkMode ? "dark-mode" : "lightmode"
      } min-h-screen max-h-full`}
    >
      <div className="h-[20rem] w-full flex flex-col items-center justify-center relative">
        <img
          src={Background}
          alt="background"
          className="w-full h-full absolute z-1 object-cover"
        />
        <h1 className="text-black text-3xl">Download</h1>
        <form
          className={`${
            isDarkMode ? "dark-mode bg-slate-100" : "light-mode bg-black"
          }  absolute py-3 px-6 w-[60%] rounded-lg flex items-center justify-between`}
        >
          <input
            type="text"
            placeholder="Search for images..."
            className="bg-transparent focus:outline-none w-full"
            onChange={(e) => setImg(e.target.value)}
          />
          <FaSearch className="text-slate-600 cursor-pointer hover:scale-[1.3] ease-in duration-100" />
        </form>
      </div>
      <div className="gallery mt-6">
        {res.map((val) => (
          <ImageCard key={val.id} image={val} onImageClick={openPopup} />
        ))}
      </div>
      {selectedImage && (
        <ImageDisplay image={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
};

export default MyComponent;

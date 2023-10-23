import React, { useState } from "react";
import { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import Background from "../assets/background.jpg";
import { FaSearch } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import ImagePopup from "./ImagePopup";

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
      } min-h-screen max-h-full `}
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
          }  absolute py-3 px-6 w-[60%] rounded-lg flex items-center justify-between `}
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
          <div
            className="image bg-slate-400 rounded-lg m-1 inline-block"
            key={val.id}
          >
            <div className="pics">
              <img
                className="w-full cursor-pointer"
                src={val.urls.small}
                alt={val.alt_description}
                onClick={() => openPopup(val)}
              />
            </div>
            <div className="flex items-center justify-between mx-1 sm:mx-3 p-1">
              <div className="flex justify-center items-center pb-1 gap-2">
                <img
                  className="w-6 sm:w-10 h-6 sm:h-10 rounded-full"
                  src={val.user.profile_image.small}
                  alt="Profile Image"
                />
                <div className="flex flex-col items-start">
                  <p className="text-[10px] sm:text-lg font-bold">
                    {val.user.first_name + " " + val.user.last_name}
                  </p>
                  <p className="text-[8px] sm:text-sm text-gray-700">
                    @
                    {val.user.instagram_username === null
                      ? "Unknown"
                      : val.user.instagram_username}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[0.10rem]">
                <AiFillLike className="sm:w-5 sm:h-5 w-3 h-3" />
                <p className="text-[10px] sm:text-md">{val.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImagePopup image={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
};

export default MyComponent;

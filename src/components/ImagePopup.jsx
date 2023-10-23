import React from "react";
import {
  AiFillLike,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineShareAlt,
  AiOutlineInfoCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";

import { useDarkMode } from "./DarkModeContext";

function ImagePopup({ image, onClose }) {
  const { isDarkMode } = useDarkMode();
  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image.urls.full; // URL of the full-size image
    link.download = "downloaded_image.jpg"; // Specify the download file name
    link.style.display = "none"; // Hide the link element
    console.log("Image URL:", image.urls.full);

    link.addEventListener("error", (event) => {
      console.error("Error during download:", event);
    });

    document.body.appendChild(link); // Append it to the DOM
    link.click(); // Simulate a click to trigger the download
    document.body.removeChild(link); // Remove the link element from the DOM
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div
        className={`${
          isDarkMode ? "dark-mode" : "light-mode"
        } fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-[80vw] min-h-[10vh] max-h-[90vh] rounded-lg border-2 border-[#333] flex flex-col p-5`}
      >
        <div className="relative mx-auto">
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className=" object-contain max-h-[60vh]"
          />
          <div className="bottom-2 absolute flex justify-between w-full px-2">
            <div className="flex gap-2">
              <button className="text-white bg-transparent border-2 rounded-xl p-1 sm:p-2 flex items-center gap-1 hover:scale-110 ease-in-out duration-200">
                <AiOutlineShareAlt />
                Share
              </button>
              <button className="text-white bg-transparent border-2 rounded-xl p-1 sm:p-2 flex items-center gap-1 hover:scale-110 ease-in-out duration-200">
                <AiOutlineInfoCircle />
                Info
              </button>
            </div>
            <button
              onClick={() => handleDownload(image)}
              className="hidden sm:block text-white bg-green-500 border-2 rounded-xl p-1 sm:p-2 hover:scale-110 ease-in-out duration-200"
            >
              Download
            </button>
          </div>
        </div>
        <hr className="m-2" />
        <div
          className={`${
            isDarkMode ? "dark-mode" : "light-mode"
          } flex justify-between px-2 sm:px-5 flex-wrap`}
        >
          <div className="flex w-full justify-between p-2 items-center">
            <div className="flex items-start gap-2 sm:items-center flex-col sm:flex-row">
              <div className="flex items-center gap-2">
                <img
                  src={image.user.profile_image.medium}
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                />
                <div>
                  <p className=" font-bold text-[10px] sm:text-lg">
                    {image.user.name}
                  </p>
                  <p className="font-semibold text-[8px] sm:text-[12px] text-gray-500">
                    @{image.user.instagram_username || "Unknown"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:ml-10 items-center">
                <p className="flex items-center text-[10px] sm:text-lg">
                  <AiOutlineInstagram />
                  /@
                  {image.user.instagram_username || "Unknown"}{" "}
                </p>
                <p className="flex items-center text-[10px] sm:text-lg">
                  <AiFillTwitterCircle />/
                  {image.user.twitter_username || "Unknown"}{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-2 gap-1">
              <button
                onClick={() => handleDownload(image)}
                className="block text-sm sm:hidden text-white bg-green-500 border-2 rounded-xl p-1 sm:p-2 hover:scale-110 ease-in-out duration-200"
              >
                Download
              </button>
              <div>
                {image.downloads ? (
                  <div className="flex items-center gap-1">
                    <BiSolidDownload />
                    <p className="text-[10px] sm:text-[15px] flex flex-row">
                      {image.downloads + " "}
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <div className="popup-likes flex items-center gap-1 text-[10px] sm:text-[15px]">
                  <AiFillLike />
                  <p>{image.likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 text-xl font-semibold m-3 ">
          <h1>Related tags</h1>
          <div
            className={`${
              isDarkMode ? "text-black" : ""
            } flex flex-wrap gap-2 `}
          >
            {image.tags &&
              image.tags.map((tag) => (
                <span
                  key={tag.title}
                  className="px-2 py-1 m-1 bg-gray-200 rounded-xl"
                >
                  {tag.title}
                </span>
              ))}
          </div>
        </div>
        <button
          className="absolute top-2 right-2 bg-red-500 rounded-full p-3"
          onClick={onClose}
        >
          <AiOutlineCloseCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;

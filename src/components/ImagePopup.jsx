import React from "react";
import {
  AiFillLike,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineShareAlt,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useDarkMode } from "./DarkModeContext";

function ImagePopup({ image, onClose }) {
  const { isDarkMode } = useDarkMode();
  const mainTag =
    (isDarkMode ? "dark-mode" : "light-mode") +
    " fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-[80vw] h-[85vh] max-h-[90vh] rounded-lg border-2 border-[#333] flex flex-col p-5 ";

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
      <div className={mainTag}>
        <div className="relative mx-auto">
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className=" object-contain max-h-[60vh]"
          />
          <div className="bottom-2 absolute flex justify-between w-full px-2">
            <div className="flex gap-2">
              <button className="text-white bg-transparent border-2 rounded-xl p-2 flex items-center gap-1 hover:scale-110 ease-in-out duration-200">
                <AiOutlineShareAlt />
                Share
              </button>
              <button className="text-white bg-transparent border-2 rounded-xl p-2 flex items-center gap-1 hover:scale-110 ease-in-out duration-200">
                <AiOutlineInfoCircle />
                Info
              </button>
            </div>
            <button
              onClick={() => handleDownload(image)}
              className="text-white bg-green-500 border-2 rounded-xl p-2 hover:scale-110 ease-in-out duration-200"
            >
              Download
            </button>
          </div>
        </div>
        <hr className="m-2" />
        <div
          className={`${
            isDarkMode ? "dark-mode" : "light-mode"
          } flex justify-between px-5`}
        >
          <div className="flex gap-2 items-center">
            <img
              src={image.user.profile_image.medium}
              alt="Profile Image"
              className="w-10 h-10 rounded-full"
            />
            <div className="user-info">
              <p>{image.user.name}</p>
              <p>@{image.user.instagram_username || "Unknown"}</p>
            </div>
            {image.user.instagram_username ? (
              <div>
                <p className="flex items-center ml-4">
                  <AiOutlineInstagram />
                  {image.user.instagram_username}
                </p>
              </div>
            ) : (
              ""
            )}
            {image.user.twitter_username ? (
              <div>
                <p className="flex items-center">
                  <AiFillTwitterCircle />
                  {image.user.twitter_username}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="popup-likes flex items-center gap-1">
            <AiFillLike />
            <p>{image.likes}</p>
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
          Close
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;

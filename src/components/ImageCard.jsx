import React from "react";
import { AiFillLike } from "react-icons/ai";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image bg-slate-400 rounded-lg m-1 inline-block">
      <div className="pics">
        <img
          className="w-full cursor-pointer"
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => onImageClick(image)}
        />
      </div>
      <div className="flex items-center justify-between mx-1 sm:mx-3 p-1">
        <div className="flex justify-center items-center pb-1 gap-2">
          <img
            className="w-6 sm:w-10 h-6 sm:h-10 rounded-full"
            src={image.user.profile_image.small}
            alt="Profile Image"
          />
          <div className="flex flex-col items-start">
            <p className="text-[10px] sm:text-lg font-bold">
              {image.user.first_name + " " + image.user.last_name}
            </p>
            <p className="text-[8px] sm:text-sm text-gray-700">
              @
              {image.user.instagram_username === null
                ? "Unknown"
                : image.user.instagram_username}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[0.10rem]">
          <AiFillLike className="sm:w-5 sm:h-5 w-3 h-3" />
          <p className="text-[10px] sm:text-md">{image.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

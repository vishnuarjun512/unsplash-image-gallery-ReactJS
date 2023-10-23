import React, { useState } from "react";

const DarkModeSliderButton = ({ isDarkMode, toggleDarkMode }) => {
  const [sliderPosition, setSliderPosition] = useState(
    isDarkMode ? "dark" : "light"
  );

  const handleSliderClick = () => {
    toggleDarkMode();
    setSliderPosition(sliderPosition === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex gap-2 font-semibold">
      <h1>Dark Mode</h1>
      <div
        onClick={handleSliderClick}
        className={`slider-button ${sliderPosition}`}
      >
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default DarkModeSliderButton;

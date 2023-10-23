import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { DarkModeProvider } from "./components/DarkModeContext";
import MyComponent from "./components/MyComponent";
import { fetchRequest } from "./components/api.js";

function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  // Function to fetch data
  const fetchData = async (img) => {
    try {
      const result = await fetchRequest(img);
      setRes(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(img);
  }, [img]);

  return (
    <DarkModeProvider>
      <Header setImg={setImg} /> {/* Pass setImg to Header */}
      <MyComponent setImg={setImg} res={res} /> {/* Pass res to MyComponent */}
    </DarkModeProvider>
  );
}

export default App;

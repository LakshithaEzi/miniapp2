// context/MoodContext.js
"use client"; // Add this line

import { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [moods, setMoods] = useState([]);

  const addMood = (mood) => {
    setMoods([...moods, mood]);
  };

  return (
    <MoodContext.Provider value={{ moods, addMood }} className="bg-gray-700">
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  return useContext(MoodContext);
};

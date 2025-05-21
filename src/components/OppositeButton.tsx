import React from "react";
import { useTheme } from "../components/ThemeController";

const OppositeButton: React.FC = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <div className="relative">
      <div className="absolute inset-0 top-10 flex justify-center items-center font-mono m-5">
        <button
          onClick={toggleMode}
          className={`shadow-xl transition-all duration-300 ${
            mode === "coding" ? "button-coding" : "button-personal"
          }`}
        >
          See my Opposite
        </button>
      </div>
    </div>
  );
};

export default OppositeButton;

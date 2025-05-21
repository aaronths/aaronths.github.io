import React, { useState, useEffect } from "react";
import { useScroll } from "../components/ScrollControl";

const CodingSplash: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  const scrollToSection = useScroll();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="items">
        <div className="text-left">
          <h1 className="font-mono leading-12">Hi, I'm Aaron. I </h1>
          <h2 className="font-mono line-through text-xl leading-12">
            create websites
          </h2>
          <h2 className="font-mono line-through text-xl leading-12">
            develop apps
          </h2>
          <h2 className="font-mono line-through text-xl leading-12">program</h2>
          <h2 className="font-mono text-2xl leading-10 font-bold">
            make things{showCursor && <span className="blink">_</span>}
          </h2>
        </div>
        <div className="flex justify-between pt-10 font-mono">
          <button
            onClick={() => scrollToSection("AboutMe")}
            className="button-coding"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("Projects")}
            className="button-coding"
          >
            My Projects
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://github.com/aaronths")
            }
            className="button-coding"
          >
            My Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingSplash;

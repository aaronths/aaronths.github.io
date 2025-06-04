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
    <div className="flex justify-center items-center h-screen px-4">
      <div className="items w-full max-w-2xl">
        <div className="text-left">
          <h1 className="font-mono text-2xl md:text-3xl leading-12">
            Hi, I'm Aaron. I{" "}
          </h1>
          <h2 className="font-mono line-through text-lg md:text-xl leading-12">
            create websites
          </h2>
          <h2 className="font-mono line-through text-lg md:text-xl leading-12">
            develop apps
          </h2>
          <h2 className="font-mono line-through text-lg md:text-xl leading-12">
            program
          </h2>
          <h2 className="font-mono text-xl md:text-2xl leading-10 font-bold">
            make things{showCursor && <span className="blink">_</span>}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 pt-10 font-mono">
          <button
            onClick={() => scrollToSection("AboutMe")}
            className="button-coding w-full md:w-auto"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("Projects")}
            className="button-coding w-full md:w-auto"
          >
            My Projects
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://github.com/aaronths")
            }
            className="button-coding w-full md:w-auto"
          >
            My Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingSplash;

import React, { useState, useEffect } from "react";
import { useScroll } from "../components/ScrollControl";
import hero from "../assets/hero.jpg";

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
    <div
      className="bg-cover bg-center flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="items">
        <div className="text-left">
          <h2 className="font-calligraphy text-7xl leading-15">Hi, I'm Aaron. I like</h2>
          <h2 className="font-calligraphy line-through text-3xl leading-12">
            football
          </h2>
          <h2 className="font-calligraphy line-through text-3xl leading-12">fishing</h2>
          <h2 className="font-calligraphy line-through text-3xl leading-12">my dog</h2>
          <h2 className="font-calligraphy text-3xl leading-12">
            a lot of things{showCursor && <span className="blink">|</span>}
          </h2>
        </div>
        <div className="flex justify-between pt-10 font-sans">
          <button
            onClick={() => scrollToSection("AboutMe")}
            className="button-personal"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("Projects")}
            className="button-personal"
          >
            My Photos
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://github.com/aaronths")
            }
            className="button-personal"
          >
            My Socials
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingSplash;

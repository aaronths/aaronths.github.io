import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="font-mono text-3xl font-bold p-10 text-center">
        My Favourite Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 p-5">
        <button
          onClick={() => (window.location.href = "https://github.com/aaronths")}
          className="cursor-pointer group w-[200px] h-[300px] relative shadow-md border-1 hover:border-2 transition-all duration-300 ease-in-out transform hover:scale-[1.1] flex items-center justify-center"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h3 className="font-bold font-mono text-xl group-hover:text-lg transition-all duration-300 ease-in-out mb-2">
              Football Analysis With AI & ML
            </h3>
            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
              <p className="text-xs font-mono max-w-[160px] text-left">
                Used YOLOv5 to detect players in a football video and then used
                a custom model to predict game statistics.
                <br />
                <br />
                <span className="font-bold inline-block">
                  Click for Github Repo
                </span>
              </p>
            </div>
          </div>
        </button>
        <button
          onClick={() => (window.location.href = "https://github.com/aaronths")}
          className="cursor-pointer group w-[200px] h-[300px] relative shadow-md border-1 hover:border-2 transition-all duration-300 ease-in-out transform hover:scale-[1.1] flex items-center justify-center"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h3 className="font-bold font-mono text-xl group-hover:text-lg transition-all duration-300 ease-in-out mb-2">
              Full-Stack Digital Trade Platform
            </h3>
            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
              <p className="text-xs font-mono max-w-[160px] text-left">
                Build a robust platform for digital trade with a full-stack
                solution, building and integrating APIs.
                <br />
                <br />
                <span className="font-bold inline-block">
                  Click for Github Repo
                </span>
              </p>
            </div>
          </div>
        </button>
        <button
          onClick={() => (window.location.href = "https://github.com/aaronths")}
          className="cursor-pointer group w-[200px] h-[300px] relative shadow-md border-1 hover:border-2 transition-all duration-300 ease-in-out transform hover:scale-[1.1] flex items-center justify-center"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h3 className="font-bold font-mono text-xl group-hover:text-lg transition-all duration-300 ease-in-out mb-2">
              Portfolio Page
            </h3>
            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
              <p className="text-xs font-mono max-w-[160px] text-left">
                Used Vite, TailwindCSS and React to create the portfolio page
                that you are viewing now!
                <br />
                <br />
                <span className="font-bold inline-block">
                  Click for Github Repo
                </span>
              </p>
            </div>
          </div>
        </button>
        <button
          onClick={() => (window.location.href = "https://github.com/aaronths")}
          className="cursor-pointer group w-[200px] h-[300px] relative shadow-md border-1 hover:border-2 transition-all duration-300 ease-in-out transform hover:scale-[1.1] flex items-center justify-center"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h3 className="font-bold font-mono text-xl group-hover:text-lg transition-all duration-300 ease-in-out mb-2">
              AI-Assisted Mobile Todo App
            </h3>
            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
              <p className="text-xs font-mono max-w-[160px] text-left">
                Used ElevenLabs API to generate voice assistance on top of a
                mobile todo app using React Native.
                <br />
                <br />
                <span className="font-bold inline-block">
                  Click for Github Repo
                </span>
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import dogicon from "../assets/download.png";

const AboutMe: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <p className="font-mono p-10">
        ====================================================================
      </p>
      <div className="p-20">
        <h2 className="font-mono text-2xl font-bold">About Me</h2>
        <div className="flex items-center gap-4">
          <p className="font-mono text-lg text-left">
            hi, i'm aaron! <br />
            <br /> i'm a third-year student studying a double degree in software
            engineering and biotechnology at unsw. i've worked on diverse
            projects, including cutting-edge research on self-assembling
            vesicles as a scientific research assistant and fostering young
            kids' interest in coding and game development. <br />
            <br />i run my own tutoring business, where i’ve helped students
            achieve academic success through personalized lessons. on campus,
            i’m actively involved with the biotechnology and biomolecular
            sciences society, organizing events like networking nights and
            biotech startup site tours to connect students with industry
            professionals. <br />
            <br />
            i’m passionate about problem-solving, collaboration, and
            contributing to impactful projects.
          </p>
          <img
            src={dogicon}
            alt="Dog Icon"
            className="p-20 hidden lg:block"
          ></img>
        </div>
      </div>
      <p className="font-mono p-10">
        ====================================================================
      </p>
    </div>
  );
};

export default AboutMe;

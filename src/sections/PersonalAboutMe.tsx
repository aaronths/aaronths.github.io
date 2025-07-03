import React from "react";

const PersonalAboutMe: React.FC = () => {
  return (
    <div className="bg-linear-to-t from-neutral-50 to-sky-100 w-full h-screen">
      <br />
      <br />
      <div className="p-10">
        <h2 className="text-6xl font-bold font-playfair ">About Me</h2>
        <div className="flex gap-4">
          <img
            src="/pfp.png"
            className="hidden w-100 h-90 rounded-full m-20 lg:block"
          ></img>
          <p className="font-sans text-lg text-left mt-20 mx-10">
            hi, i'm aaron! <br />
            <br /> i'm a guy living in sydney, australia. apart from studying to
            be (hopefully) a software engineer, i have a passion for football
            and the ocean.
            <br />
            <br />i play football for macquarie university and have supported
            barcelona all my life. <br />
            <br />
            i also love anything to do with the ocean, which includes fishing,
            snorkelling and diving. when i'm not creating projects or working on
            uni assessments you can catch me on rock ledges (normally catching
            nothing) or in the ocean. i recently received my open water diving
            certification and am looking for dive recommendations!
            <br />
            <br />
            i'm super lucky to have a great family and girlfriend that support
            me in everything i do. and a very cute dog, can't forget him.
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default PersonalAboutMe;

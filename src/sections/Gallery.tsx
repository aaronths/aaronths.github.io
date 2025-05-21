import React from "react";

const Gallery: React.FC = () => {
  return (
    <div className="p-5 md:p-10">
      <h1>Life Recently</h1>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child):mt-5 lg:[&>img:not(:first-child):mt-8">
        <img src=""></img>
      </div>
    </div>
  );
};

export default Gallery;

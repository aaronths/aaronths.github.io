import React from "react";

const Gallery: React.FC = () => {
  return (
    <div className="p-10">
      <h2 className="font-playfair text-6xl font-bold p-5">
        Some Photos I Like
      </h2>
      <div className="p-10 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <img
          src="/galleryPhotos/1.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/2.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/3.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/4.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/5.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/6.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/7.jpeg"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/8.png"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/9.png"
          className="hover:scale-110 transition-transform duration-100"
        />
        <img
          src="/galleryPhotos/10.png"
          className="hover:scale-110 transition-transform duration-100"
        />
      </div>
    </div>
  );
};

export default Gallery;

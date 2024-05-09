// import React from 'react'
import Footer from "../components/Footer";

function GalleryPage() {
  const style = {
    // backgroundImage: `url('/images/${props.image}')`,
  };
  return (
    <>
      <div className="w-full text-white">
        <div
          style={style}
          className="bg-image object-cover bg-cover bg-no-repeat bg-center  bg-black flex justify-start items-end  h-[250px]"
        >
          <div className="About"></div>
        </div>
        <h1 className="font-bold text-3xl text-center">Gallery</h1>
        <div className="gallery"></div>
      </div>
      <Footer />
    </>
  );
}

export default GalleryPage;

// import React from 'react'
import Logo from "../assets/android-chrome-192x192.png";
import Footer from "../components/Footer";
import backgroundVideo from "../assets/2024_05_05_21_54_IMG_8198.MOV";
import ProjectCard from "../components/ProjectCard";
// import { useState, useEffect } from "react";
// import Loader from "../components/LoaderPage";
import { data } from "../data/ProjectData";
function Home() {
  const projectCard = data.map((Projectdata) => {
    return (
      <ProjectCard
        key={Projectdata.id}
        video={Projectdata.video}
        image={Projectdata.poster}
        Artist={Projectdata.artist}
        songName={Projectdata.song}
      />
    );
  });
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   // Simulate loading time (you can replace this with actual data fetching)
  //   // const timeout = () =>{
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  //   // }

  //   // Clean up the timeout when the component unmounts
  //   // timeout()
  // }, []);
  return (
    <div>
      <video
        className="fixed top-0 left-0 w-full h-[100vh] object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="home relative z-10">
        <div className="w-full h-20 px-4 flex items-center justify-between md:justify-end bg-transparent">
          <img className="w-16 md:hidden" src={Logo} alt="" />
          <ul className="hidden md:block lg:text-2xl text-white font-medium">
            <li className="hover:text-yellow-400">
              {" "}
              <p>contact@paperwork.studio</p>{" "}
            </li>
            <li className="hover:text-yellow-400">
              {" "}
              <p> @paperwork</p>
            </li>
          </ul>
        </div>
        <div className=" w-full px-7 text-white pt-[200px] pb-8">
          <img className="w-16 md:block hidden" src={Logo} alt="" />
          <div className="flex items-start justify-between flex-col gap-[80px] md:flex-row">
            <h1 className="text-base md:text-xs text-left">
              PAPERWORK STUDIO IS A MULTIMEDIA CREATIVE CONSULTING AND
              PRODUCTION COMPANY.
            </h1>
            <ul className="md:hidden block lg:text-2xl text-white font-medium">
              <li className="hover:text-yellow-400">
                {" "}
                <p>contact@paperwork.studio</p>
              </li>
              <li className="hover:text-yellow-400">
                {" "}
                <p>@paperwork</p>
              </li>
            </ul>
            <p>
              MIAMI, FL <br />
              33137
            </p>
          </div>
        </div>
        <div className="w-full text-white px-7 pb-10 border-b-[2px] border-white">
          <h1 className="font-medium text-xl md:text-2xl lg:text-4xl">
            We partner with brands and artists to create incredible content. Our
            roster boasts a plethora of talented directors, photographers,
            producers, editors, 3-D and graphics artists who collaborate in
            unison to complete projects skillfully & efficiently.
          </h1>
        </div>
        <div className="text-white bg-black px-7 py-3 uppercase w-full h-fit">
          <h3 className="text-xl md:text-2xl font-medium">team members</h3>
          <ul className="lists text-left py-2 w-full text-sm md:text-lg list-none">
            <li>jmp</li>
            <li>connor pritchard</li>
            <li>azriel sanchez</li>
            <li>bobby lee palmer</li>
            <li> joey szela</li>
            <li> andrew percival</li>
          </ul>
        </div>
        <div className="projects px-3 w-full bg-transparent grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {projectCard}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

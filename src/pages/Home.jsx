// import React from 'react'
import Logo from "../assets/android-chrome-192x192.png";
import Footer from "../components/Footer";
// import backgroundVideo from "../assets/background video.mp4";
import ProjectCard from "../components/ProjectCard";
// import { useState, useEffect } from "react";
// import Loader from "../components/LoaderPage";
import { data } from "../data/ProjectData";
function Home() {
  const projectCard = data.map((Projectdata) => {
    return (
      <ProjectCard
        key={Projectdata.id}
        id={Projectdata.id}
        video={Projectdata.video}
        image={Projectdata.poster}
        Artist={Projectdata.artist}
        songName={Projectdata.song}
      />
    );
  });
  return (
    <div>
      <video id="video"
        className="fixed top-0 left-0 w-full h-[100vh] object-cover -z-10"
        autoPlay
        loop
        muted
        controls = {false}
      >
        <source src="./images/background video.mp4" type="video/mp4" />
      </video>

      <div className="home relative z-10">
        <div className="w-full h-20 px-4 flex items-center justify-between md:justify-end bg-transparent md:mb-[400px] pt-7">
          <img className="w-16 fixed -z-10 md:hidden" src={Logo} alt="" />
          <ul className="hidden md:block lg:text-2xl text-white font-medium text-right">
            <li className="hover:text-yellow-400">
              <a href="mailto:1percentevryday@gmail.com?subject=Your%20Subject&body=Your%20Message">
              <p className="text-base font-light lg:text-3xl md:text-lg">1percentevryday@gmail.com</p>
              </a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="https://www.instagram.com/1.percnt/?utm_source=ig_web_button_share_sheet">
              <p className="text-base font-light lg:text-3xl md:text-lg">@1.percnt</p>
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-full px-7 text-white pt-[200px] pb-8 md:py-60">
          <img className="w-16 md:block hidden" src={Logo} alt="" />
          <div className="flex items-start justify-between flex-col gap-[80px] md:flex-row">
            <h1 className="text-lg md:text-sm lg:text-base text-left font-light">
              1% Studio is a multimedia creative consulting and production company.
            </h1>
            <ul className="md:hidden lg:text-2xl grid gap-2 text-white font-medium">
              <li className="hover:text-yellow-400">
                <a href="mailto:1percentevryday@gmail.com?subject=Your%20Subject&body=Your%20Message">
                <p className="text-sm font-light">1percentevryday@gmail.com</p>
                </a>
              </li>
              <li className="hover:text-yellow-400">
                <a href="https://www.instagram.com/1.percnt/?utm_source=ig_web_button_share_sheet"><p className="text-sm font-light">@1.percnt</p></a>
              </li>
            </ul>
            <p className="text-[11px] md:text-sm font-light">
              LAGOS, NG
            </p>
          </div>
        </div>
        <div className="w-full text-white px-7 pb-10 bg-black md:bg-transparent py-7 md:py-32  border-b-[2px] border-white">
          <h1 className="font-light text-lg md:text-5xl">
            We partner with brands and artists to create incredible content. Our
            roster boasts a plethora of talented directors, photographers,
            producers, editors, 3-D and graphics artists who collaborate in
            unison to complete projects skillfully & efficiently.
          </h1>
        </div>
        <div className="text-white bg-transparent md:bg-black px-7 py-3 uppercase w-full h-fit">
          <h3 className="text-base hidden md:block md:text-base font-medium">team members</h3>
          <ul className="lists flex flex-col md:flex-row justify-start md:justify-end gap-2 md:gap-7 py-2 w-full text-sm list-none">
            <li  className="hover:text-yellow-400 cursor-pointer"> <a href="https://www.instagram.com/xander.thegr8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <p>xander</p></a></li>
            <li className="hover:text-yellow-400 cursor-pointer"> <a href="https://www.instagram.com/vyuba_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <p>Alexander preye</p></a></li>
            <li className="hover:text-yellow-400 cursor-pointer"> <a href="https://www.instagram.com/visuals_xyz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><p>Mbata Enzo</p></a></li>
          </ul>
        </div>
        <div className="projects px-3 md:px-7 w-full bg-transparent md:bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectCard}
        </div>
        <Footer />
      </div>
    </div>
  );
}
// grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
export default Home;

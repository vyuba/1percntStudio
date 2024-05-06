// import React from 'react'
// import imgBackground from "../assets/vlcsnap-2024-05-03-00h14m44s751.png"

function ProjectCard() {
  return (
    <div className="bg-image bg-black flex justify-start items-end h-[280px]">
        {/* <img className=" w-full h-fit object-cover" src={imgBackground} alt="" /> */}
        <div className="uppercase pl-3 pb-2 text-white flex flex-col gap-3">
            <p className="text-xs text-white">kick</p>
            <p className="text-lg  font-medium">a new dawn</p>
        </div>
    </div>
  )
}

export default ProjectCard
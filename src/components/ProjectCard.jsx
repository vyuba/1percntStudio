// import React from 'react'
// import imgBackground from "../assets/vlcsnap-2024-05-03-00h14m44s751.png"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { data } from "../data/ProjectData";

function ProjectCard(props) {
  const style = {
    backgroundImage: `url('/images/${props.image}')`,
  };
  const scroll = ()=>{
    document.body.scrollTo({top:0, behavior:"smooth"})
  }
  return (
    <Link to={`/projects/${props.id}`}>
      <div onClick={scroll} className="h-[180px] sm:h-[200px] md:h-[300px]">
        <div
          style={style}
          className="bg-image object-cover bg-cover bg-no-repeat bg-center  bg-black flex justify-start items-end h-full "
        >
          {/* <img className=" object-cover bg-cover bg-no-repeat bg-center" src={`/images/${props.image}`} alt="" /> */}
        </div>
          <div className="pl-3 pb-2 relative bottom-16 text-white flex flex-col brightness-150 gap-1">
            <p className="text-xs font-light uppercase text-white">{props.Artist}</p>
            <p className="text-sm md:text-xl uppercase font-light md:font-semibold">
              &quot;{props.songName}&quot;
            </p>
          </div>
      </div>
    </Link>
  );
}
ProjectCard.propTypes = {
  id: PropTypes.number,
  Artist: PropTypes.string,
  songName: PropTypes.string,
  image: PropTypes.string,
};
export default ProjectCard;

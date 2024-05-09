// import React from 'react'
// import imgBackground from "../assets/vlcsnap-2024-05-03-00h14m44s751.png"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { data } from "../data/ProjectData";

function ProjectCard(props) {
  const style = {
    backgroundImage: `url('/images/${props.image}')`,
  }
  return (
      <Link to={`/projects/${props.id}`}>
      <div style={style} className="bg-image object-cover bg-cover bg-no-repeat bg-center  bg-black flex justify-start items-end  h-[250px]">
        {/* <img className=" object-cover bg-cover bg-no-repeat bg-center" src={`/images/${props.image}`} alt="" /> */}
        <div className="uppercase pl-3 pb-2 text-white flex flex-col gap-3">
          <p className="text-xs text-white">{props.Artist}</p>
          <p className="text-lg font-medium">&quot;{props.songName}&quot;</p>
        </div>
      </div>
        </Link>
  );
}
ProjectCard.propTypes = {
  id : PropTypes.number,
  Artist: PropTypes.string,
  songName: PropTypes.string,
  image: PropTypes.string,
};
export default ProjectCard;

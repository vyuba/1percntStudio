import { useParams } from "react-router-dom";
import { data } from "../data/ProjectData";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

function ProjectsPage() {
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
  const { id } = useParams();
  const projectId = data.find((datas) => datas.id === parseInt(id));
  // const { artist } = projectId
  const styles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };
  const style = {
    backgroundImage: `url('/images/${projectId.poster}')`,
  };
  console.log(projectId.src);
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        {projectId.src == "" ? (
          <div className="w-full  text-white">
          <div
            style={style}
            className=" object-cover bg-cover bg-no-repeat bg-center  bg-black flex justify-start items-end  h-[700px] lg:h-[1000px]"
          >
            <div className="About text-white font-medium uppercase px-7">
                <p>{projectId.song}</p>
                <p>{projectId.artist}</p>
                <p>{projectId.description}</p>
            </div>
          </div>
          <h1 className="font-bold text-3xl text-center md:text-6xl pt-10">Gallery</h1>
          <div id="gallery" className="gallery py-9">
            <img src={`/images/${projectId.image1}`} alt="" />
            <img src={`/images/${projectId.image2}`} alt="" />
            <img src={`/images/${projectId.image3}`} alt="" />
            <img src={`/images/${projectId.image4}`} alt="" />
            <img src={`/images/${projectId.image5}`} alt="" />
            <img src={`/images/${projectId.image6}`} alt="" />
            <img src={`/images/${projectId.image7}`} alt="" />
            <img src={`/images/${projectId.image8}`} alt="" />
            <img src={`/images/${projectId.image9}`} alt="" />
          </div>
        </div>
        ) : (
          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                src={projectId.src}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={styles}
                title={projectId.song}
              ></iframe>
          </div>
        )}
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className={`px-7 py-10 text-white ${projectId.src == "" ? ("hidden"):("block") } `}>
          <p className="text-white text-3xl font-bold">{projectId.song}</p>
          <h1 className="text-white font-medium pb-3">{projectId.artist}</h1>
          <p>
            <span className="capitalize font-bold">team: </span>
            {projectId.description}
          </p>
        </div>

        <div className="projects px-4 pb-10 w-full bg-transparent grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {projectCard}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProjectsPage;


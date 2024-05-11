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
            <div className="About text-white text-xl md:text-2xl py-10 font-medium capitalize px-7">
                <p>{projectId.song}</p>
                <p>{projectId.artist}</p>
                <p>{projectId.description}</p>
            </div>
          </div>
          <h1 className="font-bold text-3xl text-center md:text-6xl pt-10">Gallery</h1>
          <div id="gallery" className="gallery py-9">
            <img src={`/images${projectId.image2}`} alt="" />
            <img src={`/images${projectId.image3}`} alt="" />
            <img src={`/images${projectId.image4}`} alt="" />
            <img src={`/images${projectId.image5}`} alt="" />
            <img src={`/images${projectId.image6}`} alt="" />
            <img src={`/images${projectId.image7}`} alt="" />
            <img src={`/images${projectId.image8}`} alt="" />
            <img src={`/images${projectId.image9}`} alt="" />
            <img src={`/images${projectId.image1}`} alt="" />
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
        <div className={`px-7 py-10 text-white flex flex-col md:justify-between md:flex-row gap-4 md:gap-7 ${projectId.src == "" ? ("hidden"):("block") } `}>
          <div>
          <p className="text-white uppercase text-3xl md:text-6xl font-bold">{projectId.song}</p>
          <h1 className="text-white font-medium pb-3">{projectId.artist}</h1>
          </div>
          <div>
            <p className="capitalize font-bold">team: </p>
            <ul className="capitalize">
            <li className={`${projectId.director =="" && ("hidden")}`}>
            director: <a className={`underline`} href="">{projectId.director}</a>
            </li>
            <li className={`${projectId.producer =="" && ("hidden")}`}>
            producer: <a className={`underline`} href="">{projectId.producer}</a>
            </li>
            <li className={`${projectId.editor =="" && ("hidden")}`}>
            editor: <a className={`underline`} href="">{projectId.editor}</a>
            </li>
            <li className={`${projectId.colorist =="" && ("hidden")}`}>
            colorist: <a className={`underline`} href="">{projectId.colorist}</a>
            </li>
            <li className={`${projectId.soundDesign =="" && ("hidden")}`}>
            sound: <a className={`underline`} href="">{projectId.soundDesign}</a>
            </li>
            <li className={`${projectId.models =="" && ("hidden")}`}>
            models: <a className={`underline`} href="">{projectId.models}</a>
            </li>
            <li className={`${projectId["3DVfx"] =="" && ("hidden")}`}>
            3DVfx: <a className={`underline`} href="">{projectId["3DVfx"]}</a>
            </li>
            <li className={`${projectId.productionManager =="" && ("hidden")}`}>
            PM: <a className={`underline`} href="">{projectId.productionManager}</a>
            </li>
            <li className={`${projectId.BTSPhotographer =="" && ("hidden")}`}>
            BTS photographer: <a className={`underline`} href="">{projectId.BTSPhotographer}</a>
            </li>
            <li className={`${projectId.studioRunner =="" && ("hidden")}`}>
            Studio Runner: <a className={`underline`} href="">{projectId.studioRunner}</a>
            </li>
            <li className={`${projectId.gaffer =="" && ("hidden")}`}>
            gaffer: <a className={`underline`} href="">{projectId.gaffer}</a>
            </li>
            <li className={`${projectId.PA =="" && ("hidden")}`}>
            PA1: <a className={`underline`} href="">{projectId.PA[0]}</a>
            </li>
            <li className={`${projectId.PA =="" && ("hidden")}`}>
            PA2: <a className={`underline`} href="">{projectId.PA[1]}</a>
            </li>
            <li className={`${projectId.techSupport =="" && ("hidden")}`}>
            tech support: <a className={`underline`} href="">{projectId.techSupport}</a>
            </li>
            <li className={`${projectId.Fpv =="" && ("hidden")}`}>
            Fpv: <a className={`underline`} href="">{projectId.Fpv[0]}</a>
            </li>
            <li className={`${projectId.stylest =="" && ("hidden")}`}>
            stylest: <a className={`underline`} href="">{projectId.stylest}</a>
            </li>
            <li className={`${projectId.DOP =="" && ("hidden")}`}>
            DOP: <a className={`underline`} href="">{projectId.DOP}</a>
            </li>
            <li className={`${projectId.productionCompany =="" && ("hidden")}`}>
            production company: <a className={`underline`} href="">{projectId.productionCompany}</a>
            </li>
            </ul>
          </div>
        </div>

        <div className="projects px-4 pb-10 w-full bg-transparent grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {projectCard}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProjectsPage;


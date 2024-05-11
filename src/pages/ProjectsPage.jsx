import { useParams } from "react-router-dom";
import { data } from "../data/ProjectData";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

function ProjectsPage() {

  // const history = useHistory();

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to top on page load
  // }, [history]); // Run when the history changes (i.e., on page load)

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
            <ul className="About text-white text-xl md:text-2xl py-10 font-medium capitalize px-7">
                <p>{projectId.song}</p>
                <p>{projectId.artist}</p>
                {/* <p>{projectId.description}</p> */}
                {/* <li className={`${projectId.shotBy =="" && ("hidden")}`}>
                Shot by: <a className={`underline`} href="">{projectId.shotBy}</a>
                </li>
                <li className={`${projectId.other =="" && ("hidden")}`}>
                Studio: <a className={`underline`} href="">{projectId.other[0]}</a>
                </li> */}
            </ul>
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
            <ul className="capitalize font-medium">
            <li className={`${projectId.director =="" && ("hidden")}`}>
            director: <a className={``} href="">{projectId.director}</a>
            </li>
            <li className={`${projectId.producer =="" && ("hidden")}`}>
            producer: <a className={``} href="">{projectId.producer}</a>
            </li>
            <li className={`${projectId.editor =="" && ("hidden")}`}>
            editor: <a className={``} href="">{projectId.editor}</a>
            </li>
            <li className={`${projectId.colorist =="" && ("hidden")}`}>
            colorist: <a className={``} href="">{projectId.colorist}</a>
            </li>
            <li className={`${projectId.soundDesign =="" && ("hidden")}`}>
            sound: <a className={``} href="">{projectId.soundDesign}</a>
            </li>
            <li className={`${projectId.models =="" && ("hidden")}`}>
            models: <a className={``} href="">{projectId.models}</a>
            </li>
            <li className={`${projectId["3DVfx"] =="" && ("hidden")}`}>
            3DVfx: <a className={``} href="">{projectId["3DVfx"]}</a>
            </li>
            <li className={`${projectId.productionManager =="" && ("hidden")}`}>
            PM: <a className={``} href="">{projectId.productionManager}</a>
            </li>
            <li className={`${projectId.BTSPhotographer =="" && ("hidden")}`}>
            BTS photographer: <a className={``} href="">{projectId.BTSPhotographer}</a>
            </li>
            <li className={`${projectId.studioRunner =="" && ("hidden")}`}>
            Studio Runner: <a className={``} href="">{projectId.studioRunner}</a>
            </li>
            <li className={`${projectId.gaffer =="" && ("hidden")}`}>
            gaffer: <a className={``} href="">{projectId.gaffer}</a>
            </li>
            <li className={`${projectId.PA =="" && ("hidden")}`}>
            PA1: <a className={``} href="">{projectId.PA[0]}</a>
            </li>
            <li className={`${projectId.PA =="" && ("hidden")}`}>
            PA2: <a className={``} href="">{projectId.PA[1]}</a>
            </li>
            <li className={`${projectId.techSupport =="" && ("hidden")}`}>
            tech support: <a className={``} href="">{projectId.techSupport}</a>
            </li>
            <li className={`${projectId.Fpv =="" && ("hidden")}`}>
            Fpv: <a className={``} href="">{projectId.Fpv[0]}</a>
            </li>
            <li className={`${projectId.stylest =="" && ("hidden")}`}>
            stylest: <a className={``} href="">{projectId.stylest}</a>
            </li>
            <li className={`${projectId.DOP =="" && ("hidden")}`}>
            DOP: <a className={``} href="">{projectId.DOP}</a>
            </li>
            <li className={`${projectId.productionCompany =="" && ("hidden")}`}>
            production company: <a className={``} href="">{projectId.productionCompany}</a>
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


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
  return (
    <div>
      <Navbar />
      <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
        <iframe
          src={projectId.src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={styles}
          title={projectId.song}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className="px-7 py-10 text-white">
      <p className="text-white text-3xl font-bold">{projectId.song}</p>
      <h1 className="text-white">{projectId.artist}</h1>
      <p>{projectId.description}</p>
      </div>
      <div className="projects px-3 pb-10 w-full bg-transparent grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {projectCard}
      </div>
      <Footer/>
    </div>
  );
}
export default ProjectsPage;

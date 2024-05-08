import { useParams } from "react-router-dom"
import { data } from "../data/ProjectData";

function ProjectsPage() {
    const { Id } = useParams();
    const projectId = data.find((datas)=> datas.id === Id);
    const { artist } = projectId
  return (
    <div className="text-white text-6xl">
        <img src="" alt="" />
        <p>{artist}</p>
    </div>
  )
}
export default ProjectsPage

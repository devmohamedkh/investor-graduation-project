import "./projects.css";
import ProjectSerchCard from "../components/ProjectSerchCard";
import { getProjects, getProjectsByName } from "../redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Projects() {
  const { projects, loading, error, serchResult } = useSelector(
    (state) => state.project
  );

  const dispatch = useDispatch();
  const [serch, setSerch] = useState("");

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    dispatch(getProjectsByName(serch || "a"));
  }, [serch, dispatch]);

  return (
    <div className="container">
      <div className="serch-box">
        <h1 className="s-title">Investment opportunities</h1>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setSerch(e.target.value)}
        />
        <ToastContainer />
      </div>

      <div className="project-card-list">
        {projects &&
          projects.map(
            (project, i) =>
              i < 9 && <ProjectSerchCard key={i} project={project} />
          )}
      </div>
    </div>
  );
}

export default Projects;

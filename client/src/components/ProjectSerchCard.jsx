import { Link } from "react-router-dom";
import roundom from "../redux/rundom";
function ProjectSerchCard({ project }) {
  const fTarget = roundom(project.target);
  return (
    <Link to={`/projects/${project._id}`}>
      <div className="project-card">
        <img
          src={`http://localhost:5000/${project.backgroundImg}`}
          alt=""
          className="project-card-bg"
        />
        <img
          src={`http://localhost:5000/${project.logo}`}
          alt=""
          className="project-card-logo"
        />
        <div className="project-card-content">
          <h2 className="project-card-title">{project.name}</h2>
          <p className="project-card-desc">
            {project.description.substring(0, 100)}...
          </p>
          <div className="project-card-target">
            <div className="project-card-target-info">
              <p className="project-card-target-text">${project.target}</p>
              <p className="project-card-target-text">Target</p>
            </div>
            <div className="project-card-target-info">
              <p className="project-card-target-text">22</p>
              <p className="project-card-target-text">days left</p>
            </div>
          </div>
          <div className="project-card-progress">
            <div className="project-card-progress-bar">
              <div
                className="project-card-progress-bar-fill"
                style={{
                  width: `${Math.floor((fTarget / project.target) * 100)}%`,
                }}
              ></div>
              <p className="project-card-progress-bar-text">
                {Math.floor((fTarget / project.target) * 100)}%
              </p>
            </div>
          </div>
          <div className="project-card-info">
            <div className="project-card-info-content">
              <p className="project-card-info-text">${fTarget}</p>
              <p className="project-card-info-text">Raised</p>
            </div>
            <div className="project-card-info-content">
              <p className="project-card-info-text">{project.equity}%</p>
              <p className="project-card-info-text">Equity</p>
            </div>
            <div className="project-card-info-content">
              <p className="project-card-info-text">{project.investors}</p>
              <p className="project-card-info-text">investors</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectSerchCard;

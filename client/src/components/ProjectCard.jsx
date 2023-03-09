import React from "react";

function ProjectCard({ project }) {
  // const logos = project.logo.split("\\");
  // const logoURL = `${logos[0]}/${logos[1]}`;
  return (
    <div className="io-card " data-aos="fade-right">
      <div className="io-card-img">
        <img src={`http://localhost:5000/${project.backgroundImg}`} alt="" />
      </div>
      <div className="io-card-logo">
        <img src={`http://localhost:5000/${project.logo}`} alt="" />
      </div>
      <div className="io-card-content">
        <h3 className="io-card-title">{project.name}</h3>
        <div className="io-card-info">
          <div className="io-card-target">
            <p>
              ${project.target}
              <br />
              Target
            </p>
          </div>
          <div className="io-card-target">
            <p>
              {project.equity}%
              <br />
              Equity
            </p>
          </div>
        </div>
        <p className="io-card-text">{project.description}</p>
        <a href="/" className="p-btn">
          View opportunity
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

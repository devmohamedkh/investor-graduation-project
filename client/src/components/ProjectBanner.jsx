import React from "react";

function ProjectBanner({ project }) {
  const logos = project.logo.split("\\");
  const logoURL = `${logos[0]}/${logos[1]}`;
  return (
    <div className="io-banner-card" data-aos="fade-right">
      <img
        src={`http://localhost:5000/${logoURL}`}
        alt=""
        className="io-banner-card-img"
      />
      <div className="io-banner-info">
        <h2 className="s-title">
          Invest in {project.name} from £{project.sharePrice}
        </h2>
        <p>{project.description}</p>

        <a href="/" className="p-btn ">
          Invest in {project.name}
        </a>
      </div>
    </div>
  );
}

export default ProjectBanner;

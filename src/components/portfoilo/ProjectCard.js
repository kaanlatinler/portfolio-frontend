import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img src={project.image_url} className="img-fluid" alt={project.name} />
        <div className="portfolio-info">
          <h4>{project.name}</h4>
          <p>{project.Category.name}</p>
          <div className="portfolio-links">
            <a
              href={project.url}
              className="portfolio-details-lightbox"
              data-glightbox="type: external"
              title="Portfolio Details"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img
            src={project.image_url}
            className="img-fluid object-fit-contain"
            alt={project.name}
          />
          <div className="portfolio-info">
            <h4>{project.name}</h4>
            <p>{project.Category.name}</p>
            <div className="portfolio-links">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Preview"
              >
                <i className="bx bx-link"></i>
              </a>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target={`#portfolioModal${project.id}`}
                title="More Details"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Modal */}
      <div
        className="modal fade"
        id={`portfolioModal${project.id}`}
        tabIndex="-1"
        aria-labelledby={`portfolioModalLabel${project.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id={`portfolioModalLabel${project.id}`}
              >
                {project.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href={project.image_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image_url}
                        className="img-fluid rounded"
                        alt={project.name}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <h3>Project Details</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Category:</strong> {project.Category?.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Technology:</strong> {project.Language?.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Client:</strong> {project.client}
                      </li>
                      <li className="list-group-item">
                        <strong>Date:</strong>{" "}
                        {new Date(project.project_date).toLocaleDateString(
                          "tr-TR"
                        )}
                      </li>
                    </ul>
                    <div className="mt-3">
                      <h4>Description</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {project.url && (
                <a
                  href={project.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

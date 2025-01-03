"use client";

import React, { useEffect, useState } from "react";
import { GetProjectByName } from "@/services/api";

const ProjectSection = ({ name }) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    const fetchProject = async () => {
      const data = await GetProjectByName(name);
      setProject(data.data);
    };
    fetchProject();
  }, [name]);
  if (!project) return <div>Loading...</div>;
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={project.image_url} alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: {project.Category.name}
                </li>
                <li>
                  <strong>Client</strong>: {project.client}
                </li>
                <li>
                  <strong>Project date</strong>:
                  {project.project_date.toString("dd MMMM yyyy")}
                </li>
                <li>
                  <strong>Project URL</strong>:{" "}
                  <a href={project.url}>{project.url}</a>
                </li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

import React from "react";
import Filters from "../components/portfoilo/Filters";
import ProjectCard from "../components/portfoilo/ProjectCard";

const Portfoilo = ({ projects, categories }) => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <Filters categories={categories} />

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfoilo;

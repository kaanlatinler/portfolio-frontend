"use client";
import { useState } from "react";
import Filters from "@/components/portfoilo/Filters";
import ProjectCard from "@/components/portfoilo/ProjectCard";

const Portfolio = ({ projects, categories }) => {
  // const [activeFilter, setActiveFilter] = useState("*");

  // const filteredProjects =
  //   activeFilter === "*"
  //     ? projects
  //     : projects.filter((project) => project.Category.name === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        {/* <Filters
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        /> */}

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

export default Portfolio;

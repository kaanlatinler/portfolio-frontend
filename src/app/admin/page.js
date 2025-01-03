"use client";

import Header from "@/components/admin/Header";
import ProjectModal from "@/components/admin/ProjectModal";
import CategoryModal from "@/components/admin/CategoryModal";
import TechModal from "@/components/admin/TechModal";
import ProjectCard from "@/components/admin/ProjectCard";
import { GetProjects } from "@/services/api";
import { useEffect, useState } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await GetProjects();
      setProjects(data.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="toggle-sidebar">
      <Header />
      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-sm-4">
              <ProjectModal />
            </div>
            <div className="col-sm-4">
              <CategoryModal />
            </div>
            <div className="col-sm-4">
              <TechModal />
            </div>
          </div>
          <div className="row">
            {projects &&
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

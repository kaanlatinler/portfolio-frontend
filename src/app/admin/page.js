"use client";

import Header from "@/components/admin/Header";
import ProjectModal from "@/components/admin/ProjectModal";
import CategoryModal from "@/components/admin/CategoryModal";
import TechModal from "@/components/admin/TechModal";

export default function Home() {
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
        </section>
      </main>
    </div>
  );
}

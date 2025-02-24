"use client";

import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Resume from "@/sections/Resume";
import Portfoilo from "@/sections/Portfoilo";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useState, useEffect } from "react";
import { GetProjects } from "@/services/api";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await GetProjects();
      setProjects(data.data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      <link href="/portfoilo/assets/vendor/aos/aos.css" rel="stylesheet" />
      <link
        href="/portfoilo/assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="/portfoilo/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="/portfoilo/assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="/portfoilo/assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="/portfoilo/assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      <link href="/portfoilo/assets/css/style.css" rel="stylesheet" />

      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Portfoilo projects={projects} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Scripts */}
      <Script
        src="/portfoilo/assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/aos/aos.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/glightbox/js/glightbox.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/typed.js/typed.umd.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/waypoints/noframework.waypoints.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/portfoilo/assets/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      />
      <Script src="/portfoilo/assets/js/main.js" strategy="beforeInteractive" />
    </div>
  );
}

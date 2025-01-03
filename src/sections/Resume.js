"use client";

import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Kaan Latinler</h4>
              <p>
                <em>
                  I have 2 years of experience with .NET. I have never worked in
                  the sector before, but I worked as an IT intern for 1.5
                  months.
                </em>
              </p>
              <ul>
                <li>Finike, Antalya,Turkey</li>
                <li>(539) 323-1326</li>
                <li>kaanlatinler@orionn.com.tr</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Associate's degree in Computer Programming.</h4>
              <h5>2022 - 2024</h5>
              <p>
                <em>Duzce University, Akcakoca, Duzce</em>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>IT Internt</h4>
              <h5>2023 July - 2023 August</h5>
              <p>
                <em>Finike, Antalya, Turkiye</em>
              </p>
              <ul>
                <li>Providing technical support to personnel.</li>
                <li>Ensuring backup and maintenance of servers.</li>
                <li>Troubleshooting network issues.</li>
                <li>Resolving and upgrading machinery issues.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

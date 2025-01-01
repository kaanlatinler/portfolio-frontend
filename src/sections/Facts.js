import React from "react";
import FactBox from "../components/facts/FactBox";

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <FactBox
              icon="bi bi-emoji-smile"
              title="Happy Clients"
              count={10}
            />
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <FactBox
              icon="bi bi-journal-richtext"
              title="Projects"
              count={10}
            />
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <FactBox icon="bi bi-headset" title="Hours Of Support" count={10} />
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <FactBox icon="bi bi-award" title="Awards" count={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

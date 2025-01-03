import React from "react";

const Filters = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="row">
      <div
        className="col-lg-12 d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <ul id="portfolio-flters">
          <li
            onClick={() => setActiveFilter("*")}
            className={activeFilter === "*" ? "filter-active" : ""}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setActiveFilter(category.name)}
              className={activeFilter === category.name ? "filter-active" : ""}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;

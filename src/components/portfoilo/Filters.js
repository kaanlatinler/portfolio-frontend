import React from "react";

const Filters = ({ categories }) => {
  return (
    <div className="row">
      <div
        className="col-lg-12 d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">
            All
          </li>
          {categories.map((category) => (
            <li data-filter={`.filter-${category.name}`} key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;

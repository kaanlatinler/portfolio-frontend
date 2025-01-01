import React from "react";

const FactBox = ({ icon, title, count }) => {
  return (
    <div className="count-box">
      <i className={icon}></i>
      <span
        data-purecounter-start="0"
        data-purecounter-end={count}
        data-purecounter-duration="1"
        className="purecounter"
      ></span>
      <p>{title}</p>
    </div>
  );
};

export default FactBox;

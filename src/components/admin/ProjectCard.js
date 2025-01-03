"use client";
import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { DeleteProject } from "@/services/api";

const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;

  const truncated = text
    .substring(0, maxLength)
    .split(" ")
    .slice(0, -1)
    .join(" ");
  return {
    isTruncated: true,
    text: truncated,
  };
};

const ProjectCard = ({ project }) => {
  const truncatedDescription = truncateText(project.description);
  const [description, setDescription] = useState(truncatedDescription);

  const handleDelete = async () => {
    await DeleteProject(project.id);
    window.location.reload();
  };

  const handleShowMore = () => {
    // Tam açıklamayı göster
    setDescription({ isTruncated: false, text: project.description });
  };

  const handleShowLess = () => {
    // Açıklamayı tekrar kısalt
    setDescription({ isTruncated: true, text: truncatedDescription.text });
  };

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img
            src={project.image_url}
            height="250px"
            alt=""
            className="card-img object-fit-cover"
          />
          <div className="card-body">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-text">
              {description.isTruncated ? (
                <>
                  {description.text}...{" "}
                  <a
                    href="#"
                    className="text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowMore();
                    }}
                  >
                    devamını oku
                  </a>
                </>
              ) : (
                <>
                  {description.text}{" "}
                  <a
                    href="#"
                    className="text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowLess();
                    }}
                  >
                    kısalt
                  </a>
                </>
              )}
            </p>
            <h4 className="card-title">{project.client}</h4>
            <p className="card-text">
              {format(new Date(project.project_date), "dd.MM.yyyy", {
                locale: tr,
              })}
            </p>
            <p className="card-text">{project.Language.name}</p>
            <p className="card-text">{project.Category.name}</p>
          </div>
          <div className="card-footer justify-content-between d-flex">
            <a href={project.url} target="_blank" className="card-link">
              {project.name}
            </a>
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={handleDelete}
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

"use client";
import React, { useState, useEffect } from "react";
import { GetCategories, GetTechs, AddProject } from "../../services/api";
import { Toast, ToastContainer } from "react-bootstrap";

const ProjectModal = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    url: "",
    client: "",
    project_date: "",
    image_url: "https://picsum.photos/200",
    category_id: "disabled", // Varsayılan değer
    tech_id: "disabled", // Varsayılan değer
  });

  const [categories, setCategories] = useState([]);
  const [techs, setTechs] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const categories = await GetCategories();
      const techs = await GetTechs();
      setCategories(categories.data || []);
      setTechs(techs.data || []);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Boş veya varsayılan değer kontrolü
    if (
      !data.category_id ||
      data.category_id === "disabled" ||
      !data.tech_id ||
      data.tech_id === "disabled"
    ) {
      setToastVariant("danger");
      setToastMessage("Lütfen tüm alanları doldurun.");
      setShowToast(true);
      return;
    }

    const res = await AddProject(data);

    if (res.success) {
      setToastVariant("success");
      setToastMessage(res.message || "Proje başarıyla eklendi");
      setShowToast(true);
      // Modal'ı kapat
      document
        .getElementById("AddProjectModal")
        .querySelector(".btn-close")
        .click();
      // Formu temizle
      setData({
        name: "",
        description: "",
        url: "",
        client: "",
        project_date: "",
        image_url: "https://picsum.photos/200",
        category_id: "disabled",
        tech_id: "disabled",
      });
    } else {
      setToastVariant("danger");
      setToastMessage(res.message || "Bir hata oluştu");
      setShowToast(true);
    }
  };

  return (
    <div>
      {/* Toast notification */}
      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 1070 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg={toastVariant}
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Bildirim</strong>
          </Toast.Header>
          <Toast.Body
            className={toastVariant === "success" ? "text-white" : ""}
          >
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <a href="#" data-bs-toggle="modal" data-bs-target="#AddProjectModal">
        <div className="card text-center">
          <div className="card-body p-0">
            <h3 className="card-title">Proje Ekle</h3>
          </div>
        </div>
      </a>
      <div
        className="modal fade"
        id="AddProjectModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="AddProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="AddProjectModalLabel">
                  Proje Ekle
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Form inputs */}
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Proje Adı</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">
                    Proje Açıklaması
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      style={{ height: "100px" }}
                      name="description"
                      value={data.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Proje Linki</label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      name="url"
                      value={data.url}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">
                    Proje Müşterisi
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="client"
                      value={data.client}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">
                    Proje Tarihi
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      className="form-control"
                      name="project_date"
                      value={data.project_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Resim</label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="image_url"
                      onChange={(e) =>
                        setData({
                          ...data,
                          image_url: "https://picsum.photos/200",
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">
                    Proje Kategorisi
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-select"
                      name="category_id"
                      value={data.category_id}
                      onChange={handleChange}
                    >
                      <option value="disabled" disabled>
                        Seçiniz
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">
                    Proje Teknolojisi
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-select"
                      name="tech_id"
                      value={data.tech_id}
                      onChange={handleChange}
                    >
                      <option value="disabled" disabled>
                        Seçiniz
                      </option>
                      {techs.map((tech) => (
                        <option key={tech.id} value={tech.id}>
                          {tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Kapat
                </button>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

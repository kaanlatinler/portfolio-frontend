"use client";

import React, { useState } from "react";
import { AddCategory } from "../../services/api";
import { Toast, ToastContainer } from "react-bootstrap";

const CategoryModal = () => {
  const [data, setData] = useState({
    name: "",
  });

  // Toast state'leri
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AddCategory(data);

    if (res.success) {
      setToastVariant("success");
      setToastMessage(res.message || "Kategori başarıyla eklendi");
      setShowToast(true);
      // Modal'ı kapat
      document
        .getElementById("AddCategoryModal")
        .querySelector(".btn-close")
        .click();
      // Formu temizle
      setData({ name: "" });
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

      <a href="#" data-bs-toggle="modal" data-bs-target="#AddCategoryModal">
        <div className="card text-center">
          <div className="card-body p-0">
            <h3 className="card-title">Kategori Ekle</h3>
          </div>
        </div>
      </a>

      <div
        className="modal fade"
        id="AddCategoryModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="AddCategoryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form method="post" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="AddCategoryModalLabel">
                  Kategori Ekle
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Kategori Adı
                  </label>
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

export default CategoryModal;
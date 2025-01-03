"use client";

import React, { useState, useEffect } from "react";
import { AddTech } from "../../services/api";
import { Toast, ToastContainer } from "react-bootstrap";

const TechModal = () => {
  const [data, setData] = useState({
    name: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  // Formu sıfırlama fonksiyonu
  const resetForm = () => {
    setData({
      name: "",
    });
  };

  // Modal'ı kapama işlemi ve form sıfırlama
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Modal'ı kapama işlemi
      const modalCloseButton = document
        .getElementById("AddLangModal")
        ?.querySelector(".btn-close");
      if (modalCloseButton) modalCloseButton.click();
    }
  }, []); // Bu effect yalnızca bir kez çalışacak (component mount olduğunda)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AddTech(data);

    if (res.success) {
      setToastVariant("success");
      setToastMessage(res.message || "Teknoloji başarıyla eklendi");
      setShowToast(true);
      // Modal'ı kapama ve form sıfırlama işlemi
      resetForm();
      window.location.reload();
    } else {
      setToastVariant("danger");
      setToastMessage(res.message || "Bir hata oluştu");
      setShowToast(true);
    }
  };

  return (
    <div>
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

      <a href="#" data-bs-toggle="modal" data-bs-target="#AddLangModal">
        <div className="card text-center">
          <div className="card-body p-0">
            <h3 className="card-title">Teknoloji Ekle</h3>
          </div>
        </div>
      </a>

      <div
        className="modal fade"
        id="AddLangModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="AddLangModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form method="post" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="AddLangModalLabel">
                  Teknoloji Ekle
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
                    Teknoloji Adı
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

export default TechModal;

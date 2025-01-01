"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/api";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      console.log(data);

      if (data.user) {
        // Login başarılı - ana sayfaya yönlendir
        router.push("/admin");
      } else {
        setError(data.message || "Login failed");
        console.log(data.message);
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <img src="/admin/assets/img/logo.png" alt="Logo" />
                    <span className="d-none d-lg-block">Kaan Latinler</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your name & password to login
                      </p>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="row g-3" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

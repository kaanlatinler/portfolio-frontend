import React from "react";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="/admin/contact" className="logo d-flex align-items-center">
          <img src="/admin/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Kaan Latinler</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

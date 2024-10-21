import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan untuk mengimpor Bootstrap CSS

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img src="/assets/brand-logo.png" alt="brand-logo" height="40" className="me-2 logo-img" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#games">Our Games</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

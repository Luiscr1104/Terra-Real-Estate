import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Inicio");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <Image
            src="/assets/logo.png"
            alt="Logo del sitio"
            width={90}
            height={90}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Inicio" ? "active" : ""
                }`}
                href="/"
                onClick={handleLinkClick}
                style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: '900' }}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Proyectos" ? "active" : ""
                }`
              }
                href="/"
                onClick={handleLinkClick}
                style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: '800'}}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Nosotros" ? "active" : ""
                }`}
                href="/"
                onClick={handleLinkClick}
                style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: '1500'}}
              >
                Nosotros
              </Link  >
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Construcción" ? "active" : ""
                }`}
                href="/"
                onClick={handleLinkClick}
                style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: '800'}}
              >
                Construcción
              </Link>
            </li>
            <li className="nav-item">
              <a className="btn nav-link yellow-bg" href="/contacto">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

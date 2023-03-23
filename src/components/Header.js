import React from "react";
import Image from "next/image";

const Header = () => {
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
              <a className="nav-link active" aria-current="page" href="#" style={{color:'#51AE32'}}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color:'#51AE32'}}>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'#51AE32'}}>
                Nosotros
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'#51AE32'}}>
                Construcción
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn nav-link"
                style={{
                  backgroundColor: "#EDE547",
                  color: "#51AE32",
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                <a href="./contact.html" style={{ color: "#51AE32" }}>
                  Contáctanos
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

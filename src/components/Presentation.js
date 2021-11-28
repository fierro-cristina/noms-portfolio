import "../styles/Presentation.css";
import React from "react";

function Presentation({ className }) {
  return (
    <div
      id="presentation"
      className={className}
      style={{
        backgroundImage: `linear-gradient(to top,rgba(255,255,255,0.6559757692139356) 0%, rgba(255,255,255,0) 40%), url(${
          process.env.PUBLIC_URL + "/images/pastel-cupcakes.jpg"
        })`,
        backgroundPosition: "top left",
        backgroundSize: "120%",
      }}
    >
      <div className="logo-container">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/images/noms-logo.png"}
          alt="noms-logo"
        />
      </div>
      <div className="slogan-container">
        <h1>Nom's Bakery</h1>
        <h3>
          by
          <br />
          Chef Karla Nunez
        </h3>
      </div>
      <div>
        <a href="https://wa.me/0958772989" target="_blank">
          <i class="fab fa-whatsapp fa-2x social-icon" />
        </a>
        <a href="https://www.facebook.com/nomscookies" target="_blank">
          <i class="fab fa-facebook fa-2x social-icon" />
        </a>
        <a href="https://www.instagram.com/nomstienda/" target="_blank">
          <i class="fab fa-instagram fa-2x last-social-icon" />
        </a>
      </div>
      <div className="">
        <a href="#about">
          <i class="fas fa-chevron-down fa-4x down-icon" />
        </a>
      </div>
    </div>
  );
}

export default Presentation;

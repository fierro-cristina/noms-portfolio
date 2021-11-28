import React from "react";
import "../styles/About.css";

function About({ className }) {
  return (
    <div id="about" className={className}>
      <div className="icon-container">
        <i class="fas fa-map-marker-alt fa-7x icon"></i>
        <div className="intro">
          <p className="description">
            Estamos ubicados al Norte de Quito, Ecuador.
          </p>
        </div>
      </div>
      <div className="icon-container">
        <div
          style={{
            height: "108px",
            width: "108px",
            margin: "auto",
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/profile.jpg"
            })`,
            backgroundSize: "105%",
            backgroundPosition: "center",
            borderRadius: "200px",
            border: "4px solid #E4BAD4",
          }}
        ></div>
        <div className="intro">
          <p className="description">
            Somos artesanos emprendedores liderados por Chef Karla Nuñez,
            titulada en el Culinary Arts School.
          </p>
        </div>
      </div>
      <div className="icon-container">
        <i class="fas fa-birthday-cake fa-7x icon"></i>
        <div className="intro">
          <p className="description">
            Creamos exquisitos productos de primera calidad con diseños y
            recetas personalizadas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

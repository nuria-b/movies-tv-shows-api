import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";

export default function Navbar() {

  const [changeColor, setChangeColor]:any =useState(false)

    // Función de cambiar el color de fondo del botón al hacer click
    const handleClick:any = () => {
        setChangeColor(!changeColor)
    }

  // Recoger todos los botones
  // let Buttons = document.querySelectorAll(".selectSection button");

  // for (let button of Buttons) {
  //   // Activar la escucha para un evento de click
  //   button.addEventListener("click", (e) => {
  //     // Usar et como diminutivo de event target
  //     const et: any = e.target;
  //     // Seleccionar la clase activa
  //     const active: any = document.querySelector(".active");
  //     // Verificar el botón que tiene una clase activa   
  //     if (active) {
  //       active.classList.remove("active");
  //     }
  //     // Añadir la clase activa al botón clicado
  //     et.classList.add("active");

  //     // Seleccionar todas las clases llamadas content
  //     let allContent: any = document.querySelectorAll(".content");

  //     // Recorrer todas las clases de contenido
  //     for (let content of allContent) {
  //       // Mostrar el contenido si la clase tiene el mismo atributo de datos que el botón
  //       if (
  //         content.getAttribute("data-number") ===
  //         button.getAttribute("data-number")
  //       ) {
  //         content.style.display = "block";
  //       }
  //       // Esconder el contenido si la clase no tiene el mismo atributo de datos que el botón
  //       else {
  //         content.style.display = "none";
  //       }
  //     }
  //   });
  // }

  return (
    <nav id="navbar">
      <ul className="selectSection">
        <li>
          <Link to="/movies">
            <button onClick={handleClick} className={`menu-button ${(changeColor === true)? '' : ' active'}`}>
              <p className="menu-text">Movies</p>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/tvshows">
          <button onClick={handleClick} className={`menu-button ${(changeColor === true)? ' active' : ''}`}>
              <p className="menu-text">Movies</p>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

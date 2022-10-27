import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";

function Navbar() {
  // grab all the buttons
  let Buttons = document.querySelectorAll(".selectSection button");

  // loop through the buttons using for..of
  for (let button of Buttons) {
    // listen for a click event
    button.addEventListener("click", (e) => {
      // et = event target
      const et: any = e.target;
      // slect active class
      const active: any = document.querySelector(".active");
      // check for the button that has active class and remove it
      if (active) {
        active.classList.remove("active");
      }
      // add active class to the clicked element
      et.classList.add("active");

      // select all classes with the name content
      let allContent: any = document.querySelectorAll(".content");

      // loop through all content classes
      for (let content of allContent) {
        // display the content if the class has the same data-attribute as the button
        if (
          content.getAttribute("data-number") ===
          button.getAttribute("data-number")
        ) {
          content.style.display = "block";
        }
        // if it's not equal then hide it.
        else {
          content.style.display = "none";
        }
      }
    });
  }

  return (
    <nav>
      <ul className="selectSection">
        <li>
          <Link to="/movies">
            <button className="active">
              <p className="menu-text">Movies</p>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/tvshows">
            <button>
              <p className="menu-text">TV Shows</p>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

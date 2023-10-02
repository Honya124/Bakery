import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import useTitle from './../../hooks/useTitle';

function About() {
   useTitle("About")
  return (
    <section className="about" id="about">
      <h3 className="page-title">
        <span>About</span> us
      </h3>
      <div className="about-container">
        <div className="img">
          <img src={require("../../img/cheesecake1.jpg")} alt="cake" />
        </div>
        <div className="content">
          <h3>what makes our cakes special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat quo illo atque ut quae? Recusandae repellat modi debitis
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat quo illo atque ut quae? Recusandae repellat modi debitis
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor
            voluptates voluptas, debitis delectus recusandae autem quis quam
            asperiores saepe?
          </p>
          <Link className="btn">learn more</Link>
        </div>
      </div>
    </section>
  );
}

export default About;

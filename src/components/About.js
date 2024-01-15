import React from "react";
import "./about.css";
import img from "../assets/homebg.jpg";
function About() {
  return (
    <div className="aboutContainer">
      <div className="imagecontainer">
        <img className="myimage" src={img} alt="" />
      </div>
      <div className="introtext">
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eum autem
          facilis itaque accusantium quaerat culpa, doloribus sunt consectetur
          sint! Quia hic, molestias beatae illum maxime vel nobis quas enim?
        </h5>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { Instagram, Twitter, Github, Linkedin } from "react-bootstrap-icons";
import bimage from "../assets/dummybg.png";
const containerStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${bimage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "0px",
  filter: "saturate(1.3)",
};
function Home() {
  return (
    <div className="container" style={containerStyle}>
      <h1 className="hometext">
        Live the Life that you have always Dreamed off.
      </h1>
      <div className="socialicons">
        <Github className="social" />
        <Instagram className="social" />
        <Twitter className="social" />
        <Linkedin className="social" />
      </div>
    </div>
  );
}

export default Home;

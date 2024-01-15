import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import "../App.css";

function NavBar() {
  const [activelink, setactivelink] = React.useState("home");
  const activatelink = (value) => {
    setactivelink(value);
  };
  return (
    <Navbar expand="lg" className="navbardiv">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="justify-content-center"
          style={{ marginRight: "120px" }}
        >
          <Nav>
            <Nav.Link
              className={activelink === "home" ? "active navlink" : "navlink"}
              onClick={() => activatelink("home")}
              href="home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={activelink === "about" ? "active navlink" : "navlink"}
              onClick={() => activatelink("about")}
              href="about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={
                activelink === "stories" ? "active navlink" : "navlink"
              }
              onClick={() => activatelink("stories")}
              href="stories"
            >
              Stories
            </Nav.Link>
            <Nav.Link
              className={
                activelink === "destinations" ? "active navlink" : "navlink"
              }
              onClick={() => activatelink("destinations")}
              href="destinations"
            >
              Destinations
            </Nav.Link>
            <Nav.Link
              className={
                activelink === "gallery" ? "active navlink" : "navlink"
              }
              onClick={() => activatelink("gallery")}
              href="gallery"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className={
                activelink === "contacts" ? "active navlink" : "navlink"
              }
              onClick={() => activatelink("contacts")}
              href="contacts"
            >
              Say Hello
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

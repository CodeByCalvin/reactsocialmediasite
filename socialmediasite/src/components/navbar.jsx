import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faLightMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faSolidMoon } from "@fortawesome/free-solid-svg-icons";
import Logo from "../imgs/Reactr.png";
import "./navbar.css";

export default function NavBar({ handleToggleTheme, theme }) {
  return (
    <Navbar variant="dark" className="mb-4 custom-nav-bar" id="navpad">
      <Container fluid className="ml-1 mr-1">
        <Navbar.Brand href="" className="mr-4 ml-3 logo">
          <img src={Logo} alt="Reactr Logo" style={{ width: 50 }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/add-post" className="nav-link">
            Posts
          </Link>
        </Nav>
        <button
          className={`theme-toggle-button ${
            theme === "dark" ? "dark-theme" : ""
          }`}
          onClick={handleToggleTheme}
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSolidMoon : faLightMoon}
            className="moon-icon"
          />
        </button>
        <NavDropdown
          title={
            <div className="d-flex align-items-center">
              <span className="mr-3">John Smith</span>
              <img
                src={"https://picsum.photos/200/300"}
                alt="Profile"
                className="profile-image"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
            </div>
          }
          id="basic-nav-dropdown"
          className="dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

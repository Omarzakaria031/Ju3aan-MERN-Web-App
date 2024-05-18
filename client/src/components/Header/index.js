import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import logoImg from "../../assets/logo.png"; // Adjust the path as needed

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar-container">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-links">
              <Link to="/search" className="nav-link link">
                Search
              </Link>
              {Auth.loggedIn() ? (
                <>
                  <Link to="/me" className="nav-link link">
                    {Auth.getProfile().data.username}'s profile
                  </Link>
                  <Link onClick={logout} className="nav-link link">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link link">
                    Login
                  </Link>
                  <Link to="/signup" className="nav-link link">
                    Signup
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

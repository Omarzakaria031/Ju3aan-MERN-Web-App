import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import { homeArt } from "../assets";
import * as Icon from "react-bootstrap-icons";

const Main = () => {
  return (
    <Container className="home-container">
      <Row className="home-banner">
        <Col className="text-center banner-content">
          <h2>Discover New Recipes!</h2>
          <p>Access delicious recipes and join now!</p>
          <img src={homeArt} alt="placeholder" className="banner-image" />
          <Button variant="primary" id="get-started-btn">
            <Link to="/search" className="text-dark">
              Find a Recipe
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="home-description">
        <Col className="text-center">
          <h3>What you can do...</h3>
          <Row className="description-item-container">
            <Col className="description-item">
              <Icon.Search className="description-icon" />
              <h4>Search for Recipes</h4>
              <p>Enter an ingredient, dish name, or use filters to find recipes.</p>
            </Col>
            <Col className="description-item">
              <Icon.Heart className="description-icon" />
              <h4>Save Recipes</h4>
              <p>Bookmark recipes to your profile and add ingredients to your shopping cart!</p>
            </Col>
            <Col className="description-item">
              <Icon.GlobeAmericas className="description-icon" />
              <h4>Explore!</h4>
              <p>Enjoy and get a taste of different cuisines!</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

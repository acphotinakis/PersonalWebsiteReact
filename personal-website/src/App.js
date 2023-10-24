import React from "react";
import HomePage from "./components/pages/HomePage.js";
import Navigation from "./components/common/Navigation.js";
import Portfolio from "./components/pages/Portfolio.js";
import AboutMe from "./components/pages/AboutMe.js";
import { Container, Row } from "react-bootstrap";


const App = () => {
  return (
    <Container>
      <Row><Navigation /></Row>
      <Row><HomePage /></Row>
      <Row><AboutMe /></Row>
      <Row><Portfolio /></Row>
    </Container>
  );
};

export default App;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Assets/pfl.png";
import "./App.css";

function ColorSchemesExample() {
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (eventKey) => {
    setSelectedLink(eventKey);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", top: "0", width: "100%" }}
      >
        <Container>
          <img src={logo} style={{ width: "100px" }} alt="Logo" />
          <Nav activeKey={selectedLink} onSelect={handleLinkClick} style={{fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
            <Nav.Link as={Link} to="/women" eventKey="/women">Women's Points</Nav.Link>
            <Nav.Link as={Link} to="/" eventKey="/">Men's Points</Nav.Link>
            {/* <Nav.Link as={Link} to="/createClub" eventKey="createClub">Create Club</Nav.Link>
            <Nav.Link as={Link} to="/addMatch" eventKey="addMatch">Add Match</Nav.Link> */}
            <Nav.Link as={Link} to="/matches" eventKey="matches">Matches</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

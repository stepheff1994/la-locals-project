import React from "react";
import {Navbar, Nav} from "react-bootstrap";

function NavBarPage () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Map">Map</Nav.Link>
      <Nav.Link href="/Matches">Matches</Nav.Link>
      <Nav.Link href="/MyLikes">MyLikes</Nav.Link>
      <Nav.Link href="/NewMembers">NewMembers</Nav.Link>
      <Nav.Link href="/Questionnaire">Questionnaire</Nav.Link>
   
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBarPage 
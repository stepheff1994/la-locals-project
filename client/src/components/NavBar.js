import React from "react";
import {Navbar, Nav} from "react-bootstrap";

function NavBarPage () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">LA LOCALS</Nav.Link>
     
      <Nav.Link href="/Matches">Matches</Nav.Link>
      <Nav.Link href="/MyLikes">MyLikes</Nav.Link>
      <Nav.Link href="/NewMembers">NewMembers</Nav.Link>
      <Nav.Link href="/Questionnaire">Questionnaire</Nav.Link>
   
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Register</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Log In
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBarPage 
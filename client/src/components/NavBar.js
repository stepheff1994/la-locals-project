import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Auth from '../utils/auth';

function NavBarPage() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <Navbar className="color-nav" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-text" >
          <Nav.Link href="/">LA LOCALS</Nav.Link>
          <Nav.Link href="/MyProfile">MyProfile</Nav.Link>
          <Nav.Link href="/Chat">Chat</Nav.Link> 
          {/* lets call Matches Messages */}
          <Nav.Link href="/MyLikes">MyLikes</Nav.Link>
          <Nav.Link href="/Upgrade">Upgrade!</Nav.Link>

        </Nav>
        <Nav className="nav-text" text-align="right">
          {Auth.loggedIn() ? (
            <>
              <Nav.Link href="/MyProfile">MyProfile</Nav.Link>
              <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link eventKey={2} href="/LogIn">Log In</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )
}
export default NavBarPage
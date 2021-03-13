import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import "../main.scss";
import {
    BrowserRouter as
    Router, Link
  } from "react-router-dom";

function NavbarComp() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <div className="divBox"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
            <LinkContainer to="/">
                <Nav.Link className="textColor">Home / </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/#skills">
                <Nav.Link className="textColor">Skills / </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project">
                <Nav.Link className="textColor">Project / </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
                <Nav.Link className="textColor">Blog / </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link className="textColor">Contact / </Nav.Link>
            </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavbarComp;

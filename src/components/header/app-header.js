import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
// icon
import { PiPersonArmsSpreadFill } from "react-icons/pi";
// style
import "./app-header.css";

export default function Header({ logo, links, path }) {
  const nawLink = links.map((elem, i) => {
    return (
      <Link className="nav-link" to={path[i]} key={elem}>
        {elem}
      </Link>
    );
  });

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            className="navbar-brand-logo d-flex align-items-center "
          >
            <PiPersonArmsSpreadFill className="me-3" />
            <div>{logo}</div>
          </Navbar.Brand>
          <Nav className="ml-auto">{nawLink}</Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

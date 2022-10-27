import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Chilled Code!</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-btn" to="/courses">
                Courses
              </Link>
              <Link className="nav-btn" to="/blogs">
                Blogs
              </Link>
              {user ? (
                <>
                  <Link className="nav-btn" to="">
                    {user.displayName}
                  </Link>
                  <img className="dp-img" src={user?.imgURL} />
                  <Link className="nav-btn" to="/" onClick={logOut}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-btn" to="/register">
                    Register
                  </Link>
                  <Link className="nav-btn" to="/login">
                    Log In
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

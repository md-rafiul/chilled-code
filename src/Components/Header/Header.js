import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../logo/logo512.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState(true);

  const HandleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  const toggleThemeMode = () => {
    setMode(!mode);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img className="dp-img" src={logo} alt="" />
            <Link className="text-decoration-none logo" to="/">
              Chilled Code!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-btn" onClick={toggleThemeMode}>
                {mode ? <FaMoon /> : <FaSun />}
              </Link>
              <Link className="nav-btn" to="/courses">
                Courses
              </Link>
              <Link className="nav-btn" to="/blogs">
                Blogs
              </Link>
              <Link className="nav-btn" to="/faq">
                FAQ
              </Link>
              {user ? (
                <>
                  <img
                    className="dp-img"
                    src={user?.photoURL}
                    alt=""
                    title={user.displayName || "Not Found"}
                  />
                  <Link className="nav-btn" to="/" onClick={HandleLogOut}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
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

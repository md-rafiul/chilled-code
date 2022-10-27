import React, { useContext } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../UserContext/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const HandleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const HandleGithubSignIn = () => {
    loginWithGithub()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Form.Text className="text-muted">
            New user? <Link to="/register">Create an account!</Link>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="login-with">
        <Button
          variant="outline-info"
          className="login-btn"
          onClick={HandleGoogleSignIn}
        >
          <FaGoogle /> Log in with Google
        </Button>
        <br />
        <Button
          variant="outline-dark"
          className="login-btn"
          onClick={HandleGithubSignIn}
        >
          <FaGithub /> Log in with GitHub
        </Button>
      </div>
    </div>
  );
};

export default Login;

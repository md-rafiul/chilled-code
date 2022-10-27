import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { createUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const HandleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const HandleGithubSignIn = () => {
    loginWithGithub()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your full name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Image URL:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your image url"
            name="imgURL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
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
            Already have an account? <Link to="/login">Log In</Link>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className="login-with">
        <Button
          variant="outline-info"
          className="login-btn"
          onClick={HandleGoogleSignIn}
        >
          <FaGoogle /> Register with Google
        </Button>
        <br />
        <Button
          variant="outline-dark"
          className="login-btn"
          onClick={HandleGithubSignIn}
        >
          <FaGithub /> Register with GitHub
        </Button>
      </div>
    </div>
  );
};

export default Register;

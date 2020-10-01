import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [emailInput, setEmail] = useState("");
  const [passInput, setPassInput] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (emailInput.length && passInput.length) {
      return setSubmitSuccess(true);
    }
  };

  if (submitSuccess === true) {
    return <Redirect to="/upload" />;
  }
  return (
    <div className="container">
      <h1 className="text-center">Sign In</h1>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="text-left">Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            Any email and password will do!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;

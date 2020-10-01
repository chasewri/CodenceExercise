import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Welcome!</h1>
      <h2 className="m-top">Please Sign In to Upload Your CSV!</h2>
      <LinkContainer to="/signin">
        <Button className="m-top" variant="primary">Sign In</Button>
      </LinkContainer>
    </div>
  );
};

export default HomePage;

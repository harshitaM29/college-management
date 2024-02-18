import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <footer className={classes.footer}>
        <p>Contact us:</p>
        <p style={{ fontSize: "12px" }}>Gmail:- abc-college@email.com</p>
      </footer>
    </Container>
  );
};

export default Footer;

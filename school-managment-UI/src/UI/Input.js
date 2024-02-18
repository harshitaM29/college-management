import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group className={props.grpClass} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        className={props.classes}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default Input;

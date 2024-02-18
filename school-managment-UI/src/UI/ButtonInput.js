import React from "react";
import { Button } from "react-bootstrap";
const ButtonInput = (props) => {
  return (
    <Button className={props.classes} onClick={props.onClick} type={props.type}>
      {props.name}
    </Button>
  );
};

export default ButtonInput;

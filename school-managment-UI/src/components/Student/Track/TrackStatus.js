import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const TrackStatus = () => {
  const data = useSelector((state) => state.student.formData);
  const status = data.map((item) => item.trackstatus.status);
  return (
    <Fragment>
      <h3 style={{ marginLeft: "35rem" }}>Form Submitted!!!</h3>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Body>
          <Card.Title>Status:{status}</Card.Title>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default TrackStatus;

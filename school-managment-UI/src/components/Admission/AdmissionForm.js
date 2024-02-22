import React, { Fragment } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import classes from "./Admission.module.css";

const AdmissionForm = () => {
  return (
    <Card className={classes.admission}>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group controlId="formGridState">
          <Form.Label>Course</Form.Label>
          <Form.Select className="mb-3" defaultValue="Choose...">
            <option>Select course</option>
            <option>Computer Engineering</option>
            <option>Information Technology</option>
            <option>Electronics and Communication</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>SSC Percentage</Form.Label>
          <Form.Control type="number" placeholder="Enter percentage" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>HSC Percentage</Form.Label>
          <Form.Control type="number" placeholder="Enter percentage" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AdmissionForm;

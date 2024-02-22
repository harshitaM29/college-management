import React, { Fragment, useReducer } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import classes from "./Admission.module.css";
import { sendFormData } from "../../store/student-actions";
import { useDispatch } from "react-redux";

const initalFormState = {
  name: "",
  email: "",
  dob: "",
  address: "",
  phone: "",
  course: "",
  ssc: "",
  hsc: "null",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateValue":
      return { ...state, [action.field]: action.value };
    default:
      return initalFormState;
  }
};
const AdmissionForm = () => {
  const [state, dispatch] = useReducer(reducer, initalFormState);
  const dispatchAction = useDispatch();
  const token = localStorage.getItem("token");
  const updateValue = (field) => (e) => {
    dispatch({ type: "updateValue", field, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sscMarks = Number(state.ssc);
    let hscMarks = Number(state.hsc);
    const sendData = {
      ...state,
      ssc: sscMarks,
      hsc: hscMarks,
    };
    dispatchAction(sendFormData(sendData, token));
    dispatch(initalFormState);
  };
  return (
    <Card className={classes.admission}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={state.name}
            onChange={updateValue("name")}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={state.email}
            onChange={updateValue("email")}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            value={state.dob}
            onChange={updateValue("dob")}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={state.address}
            onChange={updateValue("address")}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone number"
            value={state.phone}
            onChange={updateValue("phone")}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGridCourse">
          <Form.Label>Course</Form.Label>
          <Form.Select
            className="mb-3"
            defaultValue="Choose..."
            value={state.course}
            onChange={updateValue("course")}
            required
          >
            <option>Select course</option>
            <option>Computer Engineering</option>
            <option>Information Technology</option>
            <option>Electronics and Communication</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGriSSC">
          <Form.Label>SSC Percentage</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter percentage"
            value={state.ssc}
            onChange={updateValue("ssc")}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridHSC">
          <Form.Label>HSC Percentage</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter percentage"
            value={state.hsc}
            onChange={updateValue("hsc")}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AdmissionForm;

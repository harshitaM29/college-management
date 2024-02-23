import React, { Fragment, useRef, useState } from "react";
import { Accordion, Button, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../../../store/student-actions";

const OnlineApplication = () => {
  const [isEdit, setIsEdit] = useState(false);
  const statusRef = useRef();
  const applications = useSelector((state) => state.student.formData);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleChange = (id) => {
    const data = {
      studentformId: id,
      status: statusRef.current.value,
    };
    dispatch(changeStatus(data, token));
    setIsEdit(false);
  };

  return (
    <Container style={{ margin: "2rem" }}>
      {applications.map((item) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" key={item.id}>
            <Accordion.Header>{item.name}</Accordion.Header>
            <Accordion.Body>
              <div>Email:{"   " + item.email}</div>
              <div>DOB:{"   " + item.dob}</div>
              <div>Address:{"   " + item.address}</div>
              <div> Phone:{"   " + item.phone}</div>
              <div> SSC %:{"   " + item.ssc}</div>
              <div> HSC %:{"   " + item.hsc}</div>
              {!isEdit && (
                <p>
                  Status:{item.trackstatus.status}
                  <button
                    style={{ marginLeft: "0.2rem" }}
                    onClick={() => setIsEdit(true)}
                  >
                    E
                  </button>
                </p>
              )}
              {isEdit && (
                <div>
                  <Form.Select
                    defaultValue="Choose"
                    style={{ width: "10rem" }}
                    ref={statusRef}
                  >
                    <option>Eligible</option>
                    <option>Not Eligible</option>
                    <option>Fee Pending</option>
                    <option>Closed</option>
                  </Form.Select>
                  <Button
                    style={{ backgroundColor: "teal", marginTop: "1rem" }}
                    onClick={() => handleChange(item.id)}
                  >
                    Change status
                  </Button>
                </div>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </Container>
  );
};

export default OnlineApplication;

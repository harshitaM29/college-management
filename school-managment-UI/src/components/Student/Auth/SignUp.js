import classes from "./SignUp.module.css";
import { Form, Button, ButtonGroup, Card } from "react-bootstrap";
import { useState } from "react";
import Input from "../../../UI/Input";
import ButtonInput from "../../../UI/ButtonInput";
import { useHistory } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const history = useHistory();

  const updateName = (e) => {
    setEnteredName(e.target.value);
  };

  const updateEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setEnteredPassword(e.target.value);
  };

  const switchAuthModeHandler = () => {
    history.push("/student/login");
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    const signupData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      isAdmin: false,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/user/signup",
        signupData
      );
      setIsLoading(false);
      history.push("/student/login");
    } catch (err) {
      setIsLoading(false);
      setEnteredEmail("");
      if (err.response.data === "SequelizeUniqueConstraintError") {
        alert("Email id already present");
      }
    }
  };
  return (
    <Card className={classes.auth}>
      <h1>Sign Up</h1>
      <Form onSubmit={signUpHandler}>
        <Input
          grpClass={classes.control}
          controlId="name"
          label="Name"
          type="text"
          placeholder="Enter Name"
          value={enteredName}
          onChange={updateName}
        />
        <Input
          grpClass={classes.control}
          controlId="email"
          label="Email Address"
          type="email"
          placeholder="Enter Email"
          value={enteredEmail}
          onChange={updateEmail}
        />
        <Input
          grpClass={classes.control}
          controlId="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          value={enteredPassword}
          onChange={updatePassword}
        />
        <ButtonGroup className={classes.actions} vertical>
          {isLoading && (
            <ButtonInput
              className={classes.toggle}
              type="button"
              name="Sending Request"
            />
          )}
          {!isLoading && (
            <ButtonInput
              variant="primary"
              type="submit"
              name="Create Account"
            />
          )}
          <Button
            className={classes.toggle}
            type="button"
            onClick={switchAuthModeHandler}
          >
            Login with existing account
          </Button>
        </ButtonGroup>
      </Form>
    </Card>
  );
};

export default SignUp;

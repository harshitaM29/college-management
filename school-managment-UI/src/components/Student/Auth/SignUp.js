import classes from "./SignUp.module.css";
import { Form, Button, ButtonGroup, Card } from "react-bootstrap";
import { useState } from "react";
import Input from "../../../UI/Input";
import ButtonInput from "../../../UI/ButtonInput";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    history.push("/student/login");
  };
  return (
    <Card className={classes.auth}>
      <h1>Sign Up</h1>
      <Form>
        <Input
          grpClass={classes.control}
          controlId="name"
          label="Name"
          type="text"
          placeholder="Enter Name"
        />
        <Input
          grpClass={classes.control}
          controlId="email"
          label="Email Address"
          type="email"
          placeholder="Enter Email"
        />
        <Input
          grpClass={classes.control}
          controlId="password"
          label="Password"
          type="password"
          placeholder="Enter Password "
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

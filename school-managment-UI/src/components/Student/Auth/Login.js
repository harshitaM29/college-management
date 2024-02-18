import ButtonInput from "../../../UI/ButtonInput";
import Input from "../../../UI/Input";
import classes from "./Login.module.css";
import { useState } from "react";
import { Form, Button, ButtonGroup, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    history.push("/student/register");
  };
  return (
    <Card className={classes.auth}>
      <h1>Login</h1>
      <Form>
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
          placeholder="Enter Password"
        />
        <ButtonGroup className={classes.actions} vertical>
          {isLoading && (
            <ButtonInput
              className={classes.toggle}
              type="button"
              name="Sending Request"
            />
          )}
          {!isLoading && <ButtonInput type="submit" name="Login" />}
          <Button
            className={classes.toggle}
            type="button"
            onClick={switchAuthModeHandler}
          >
            Create new account
          </Button>
        </ButtonGroup>
      </Form>
    </Card>
  );
};

export default Login;

import ButtonInput from "../../../UI/ButtonInput";
import Input from "../../../UI/Input";
import classes from "./Login.module.css";
import { useState } from "react";
import { Form, Button, ButtonGroup, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setTokenId } from "../../../store/auth-actions";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    history.push("/student/register");
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        loginData
      );
      setIsLoading(false);
      if (response) {
        dispatch(setTokenId(response.data));
        history.replace("/student/home");
      }
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data);
    }
  };
  return (
    <Card className={classes.auth}>
      <h1>Login</h1>
      <Form onSubmit={signInHandler}>
        <Input
          grpClass={classes.control}
          controlId="email"
          label="Email Address"
          type="email"
          placeholder="Enter Email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
        <Input
          grpClass={classes.control}
          controlId="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
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

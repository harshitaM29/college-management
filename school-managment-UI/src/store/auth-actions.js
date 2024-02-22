import { authActions } from "./auth";

export const setTokenId = (user) => {
  return (dispatch) => {
    if (user.token) {
      localStorage.setItem("token", user.token);
    }
    localStorage.setItem("isAdmin", user.isAdmin);
    dispatch(authActions.login(user));
  };
};

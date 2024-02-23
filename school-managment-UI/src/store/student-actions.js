import { studentAction } from "./student";
import axios from "axios";

export const getData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/student/getData`,
        {
          headers: { Authorization: token },
        }
      );

      dispatch(studentAction.replaceExpense(response.data || []));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const sendFormData = (data, tokenId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/student/studentform`,
        data,
        { headers: { Authorization: tokenId } }
      );
      dispatch(studentAction.addStudentForm(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const changeStatus = (data, token) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:4000/student/changestatus`, data, {
        headers: { Authorization: token },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

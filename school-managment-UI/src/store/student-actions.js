import { studentAction } from "./student";
import axios from "axios";

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

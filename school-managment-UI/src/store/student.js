import { createSlice } from "@reduxjs/toolkit";

const initialStudentState = { formData: [] };

const studentSlice = createSlice({
  name: "student",
  initialState: initialStudentState,
  reducers: {
    addStudentForm(state, action) {
      state.formData.push({
        ...action.payload,
      });
    },
  },
});

export const studentAction = studentSlice.actions;

export default studentSlice.reducer;

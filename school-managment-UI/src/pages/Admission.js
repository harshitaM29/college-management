import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AdmissionForm from "../components/Admission/AdmissionForm";
import TrackStatus from "../components/Student/Track/TrackStatus";

const Admission = () => {
  const data = useSelector((state) => state.student.formData);
  const isSubmitted = data.map((item) => item.trackstatus.isFormSubmitted);

  return (
    <Fragment>{!isSubmitted ? <AdmissionForm /> : <TrackStatus />}</Fragment>
  );
};

export default Admission;

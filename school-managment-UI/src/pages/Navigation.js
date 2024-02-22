import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import StudentHeader from "../components/Student/Header/StudentHeader";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isStudent = isAdmin === "false" && isLoggedIn;
  console.log(isStudent);
  return <Fragment>{isStudent ? <StudentHeader /> : <Header />}</Fragment>;
};

export default Navigation;

import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import StudentHeader from "../components/Student/Header/StudentHeader";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isStudent = isAdmin === "false" && isLoggedIn;
  const isAdminLogged = isAdmin === "true" && isLoggedIn;
  console.log(isStudent);
  return (
    <Fragment>
      {isStudent ? (
        <StudentHeader />
      ) : isAdminLogged ? (
        <AdminHeader />
      ) : (
        <Header />
      )}
    </Fragment>
  );
};

export default Navigation;

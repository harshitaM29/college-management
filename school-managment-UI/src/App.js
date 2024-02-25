import React, { Fragment, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./pages/Navigation";
import Footer from "./components/Layout/Footer";
import AdmissionProc from "./components/Admission/AdmissionProc";
import AdmissionNotices from "./components/Admission/AdmissionNotices";
import Login from "./components/Student/Auth/Login";
import SignUp from "./components/Student/Auth/SignUp";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignUp";
import Home from "./components/Student/Home";
import AdminHome from "./components/Admin/AdminHome";
import OnlineApplication from "./components/Admin/OnlineApplication/OnlineApplication";
import { getData } from "./store/student-actions";
import Admission from "./pages/Admission";
import Sample from "./components/Sample";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setTimeout(() => {
      if (isLoggedIn) {
        dispatch(getData(token));
      }
    }, 1000);
  }, [dispatch]);
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/admin" exact>
          <AdminLogin />
        </Route>
        <Route path="/admin/register">
          <AdminSignUp />
        </Route>
        <Route path="/procedure">
          <AdmissionProc />
        </Route>
        <Route path="/form">
          {isLoggedIn && <Admission />}
          {!isLoggedIn && <Redirect to="/student/login" />}
        </Route>
        <Route path="/notice">
          <AdmissionNotices />
        </Route>
        <Route path="/student/login">
          <Login />
        </Route>
        <Route path="/student/register">
          <SignUp />
        </Route>
        <Route path="/student/home">
          <Home />
        </Route>
        <Route path="/admin/home">
          <AdminHome />
        </Route>
        <Route path="/admin/status">
          <OnlineApplication />
        </Route>
        <Route path="/sample">
          <Sample />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

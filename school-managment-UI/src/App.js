import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./pages/Navigation";
import Footer from "./components/Layout/Footer";
import AdmissionProc from "./components/Admission/AdmissionProc";
import AdmissionForm from "./components/Admission/AdmissionForm";
import AdmissionNotices from "./components/Admission/AdmissionNotices";
import Login from "./components/Student/Auth/Login";
import SignUp from "./components/Student/Auth/SignUp";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignUp";
import Home from "./components/Student/Home";

const App = () => {
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
          <AdmissionForm />
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
        <Route path="student/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

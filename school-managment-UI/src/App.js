import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AdmissionProc from "./components/Admission/AdmissionProc";
import AdmissionForm from "./components/Admission/AdmissionForm";
import AdmissionNotices from "./components/Admission/AdmissionNotices";
import Login from "./components/Student/Auth/Login";
import SignUp from "./components/Student/Auth/SignUp";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
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
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

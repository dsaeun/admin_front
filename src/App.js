import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import CompleteLogin from "./page/CompleteLogin";
import AdminLogin from "./page/AdminLogin";
import withAuth from "./component/auth/withAuth";

let App = () => {
  return <CompleteLogin />
};

App = withAuth(App);

export default App;

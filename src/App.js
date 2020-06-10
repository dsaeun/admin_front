import React from "react";
import "./App.css";
import CompleteLogin from "./page/CompleteLogin";
import withAuth from "./component/auth/withAuth";

let App = () => {
  return <CompleteLogin />
};

App = withAuth(App);

export default App;

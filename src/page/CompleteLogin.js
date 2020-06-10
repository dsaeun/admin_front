import React from "react";
import "../App.css";
import Header from "../component/Header";
import AdminDisList from "./AdminDisList";
import AdminDetail from "./AdminDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let CompleteLogin = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <div className="contentalign">
          <Router>
            <Switch>
              <Route path="/" component={AdminDisList}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Router>
  );
};

export default CompleteLogin;

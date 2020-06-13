import React from "react";
import "../App.css";
import Header from "../component/Header";
import AdminDisList from "./AdminDisList";
import AdminDetail from "./AdminDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDisForm from "./AdminDisForm";

let CompleteLogin = () => {
  return (
    <Router>
      <div className="viewContain">
        <Header></Header>
        <div className="contentalign">
            <Switch>
              <Route exact path="/" component={AdminDisList}></Route>
              <Route path="/AdminDisList" component={AdminDisList}></Route>
              <Route path="/AdminDetail" component={AdminDetail}></Route>
              <Route path="/AdminDisForm" component={AdminDisForm}></Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
};

export default CompleteLogin;

import React from "react";
import "../App.css";
import Header from "../component/Header";
import AdminDisList from "./AdminDisList";
import AdminDetail from "./AdminDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDisEditForm from "./AdminDisEditForm";
import AdminDisAddForm from "./AdminDisAddForm";

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
              <Route path="/AdminDisEditForm" component={AdminDisEditForm}></Route>
              <Route path="/AdminDisAddForm" component={AdminDisAddForm}></Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
};

export default CompleteLogin;

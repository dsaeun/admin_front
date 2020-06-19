import React from "react";
import "../App.css";
import Header from "../component/common/Header";
import AdminDisList from "./AdminDisList";
import AdminDetail from "./AdminDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DiseaseAddContainer from "../container/Disease/DiseaseAddContatiner";
import DiseaseEditContainer from "../container/Disease/DiseaseEditContainer";

let CompleteLogin = () => {
  return (
    <Router>
      <div className="viewContain">
        <Header></Header>
        <div className="contentalign">
            <Switch>
              <Route exact path="/" component={AdminDisList}></Route>
              <Route path="/AdminDisList" component={AdminDisList}></Route>
              <Route path="/AdminDetail/:id" component={AdminDetail}></Route>
              <Route path="/AdminDisEditForm" component={DiseaseEditContainer}></Route>
              <Route path="/AdminDisAddForm" component={DiseaseAddContainer}></Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
};

export default CompleteLogin;

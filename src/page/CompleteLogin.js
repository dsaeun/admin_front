import React from "react";
import '../App.css';
import Header from "../component/Header"
import AdminDisList from "./AdminDisList"
import AdminDetail from "./AdminDetail"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function CompleteLogin({match}) {
  return (
        <div>
            <div className="contentalign">
                <Route>
                    <Switch>
                    <Route exact path={match.path} component={AdminDisList}></Route>
                    <Route path={`${match.path}:id`} component={AdminDetail}></Route>
                    </Switch>
                </Route>
            </div>
        </div>
    )
}


export default CompleteLogin;
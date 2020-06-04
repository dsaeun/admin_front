import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminLogin from './page/AdminLogin';
import AdminDisList from './page/AdminDisList';
import CompleteLogin from './page/CompleteLogin';

function App() {
  return (
    <div>
      <Router>
        <div>      
          <Switch>
            <Route exact path="/" component={AdminLogin}></Route>
            <Route path="/CompleteLogin" component={CompleteLogin}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
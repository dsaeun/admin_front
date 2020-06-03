import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminLogin from './page/AdminLogin';
import Header from './component/Header';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>       
          <Switch>
            <Route exact path="/"><h1 className="adminTitle">이 페이지는 관리자 전용 페이지입니다. 로그인을 하세요.</h1></Route>
            <Route path="/AdminLogin" component={AdminLogin}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
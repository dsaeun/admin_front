import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminDetail from './page/AdminDetail';
import AdminDisList from './page/AdminDisList';

function App() {
  return (
    <div className="viewContain">
      <Router>
        <div>
          <Switch>      
            <Route exact path="/" component={AdminLogin}></Route>
            <Route path="/AdminDisList" component={AdminDisList}></Route>
            <Route path="/AdminDetail" component={AdminDetail}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function AdminLogin({history}) {

  const [inputID, setInputID] = useState("")
  const [inputPW, setInputPW] = useState("")

  function handleClick (e) {
    {inputID === "admin" && inputPW === "1234" ? history.push('./AdminDisList') : alert("login fail"); e.preventDefault();}
    {/*성공시 AdminDisList 라우팅, 실패시 출력할 문자열 입력&자동렌더링 방지 */}
  }

  return (
    <div className="contentalign">
      <h3 className="adminTitle">이 페이지는 관리자 전용 페이지입니다. 로그인을 하세요.</h3>
      <h1 className="loginTitle">Login</h1>
      <input
        className="loginInput"
        value={inputID}
        onChange={({ target: { value } }) => setInputID(value)}
        type="text"
        placeholder="ID"
      />
      <br></br>
      <input
        className="loginInput"
        value={inputPW}
        onChange={({ target: { value } }) => setInputPW(value)}
        type="password"
        placeholder="password"
      /><br></br>
      <button className="loginBtn" onClick={handleClick}>Login</button>
    </div>
  )
}

export default App;
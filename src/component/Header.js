import React, {Component} from 'react';
import '../App.css';
import logo from '../image/logowhite.png';
import {Link} from "react-router-dom";

class Header extends Component {
  render(){
    return (
      <header className="menu">
        <div className="menuList">
          <img className="logo" src={logo} aria-hidden alt="logo image"></img>
          <ul>
            <li><Link to="/CompleteLogin">증상정보 수정</Link></li>
            <li><Link to="/">약학정보 수정</Link></li>
            <li><Link to="/">근처병원찾기 수정</Link></li>
            <li><Link to="/">근처약국찾기 수정</Link></li>
            <li className="logoutBtn"><Link to="/">로그아웃</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

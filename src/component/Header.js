import React, {Component} from 'react';
import '../App.css';
import logo from '../image/logowhite.png';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';

const Header = () => {
  const cookies = new Cookies();
  const onClick = () => {
    cookies.remove("medical-admin-access-token");
    window.location.reload();
  };

  return (
      <header className="menu">
        <div className="menuList">
          <img className="logo" src={logo} aria-hidden alt="logo image"></img>
          <ul>
            <li><Link to="./AdminDisList">질병정보 수정</Link></li>
            <li><Link to="/">약학정보 수정</Link></li>
            <li><Link to="/">근처병원찾기 수정</Link></li>
            <li><Link to="/">근처약국찾기 수정</Link></li>
            <li className="logoutBtn"><Link to="/" onClick={() => onClick()}>로그아웃</Link></li>
          </ul>
        </div>
      </header>
  );
};

export default Header;

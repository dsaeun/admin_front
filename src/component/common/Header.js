import React from 'react';
import '../../App.css';
import logo from '../../image/logowhite.png';
import { Link } from "react-router-dom";
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
          <Link to ="/AdminDisList"><img className="logo" src={logo} aria-hidden alt="logo image"></img></Link>
          <ul>
            <li><Link to="/AdminDisList">질병정보 수정</Link></li>
            <li><Link to="/Drug">약학정보 수정</Link></li>
            <li><Link to="/">근처병원찾기 수정</Link></li>
            <li><Link to="/">근처약국찾기 수정</Link></li>
            {/*<li><Link to="/AdminDisList">질병정보 관리</Link></li>*/}
            {/*<li><Link to="/SymManage">증상 관리</Link></li>*/}
            {/*<li><Link to="/PartManage">부위 관리</Link></li>*/}
            {/*<li><Link to="/MediSubject">진료과목 관리</Link></li>*/}
            <li className="logoutBtn"><Link to="/" onClick={() => onClick()}>로그아웃</Link></li>
          </ul>
        </div>
      </header>
  );
};

export default Header;

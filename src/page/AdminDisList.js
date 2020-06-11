import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import Header from '../component/Header'

let AdminDisList = () => {
  const menus = ["질병1", "질병2", "질병3", "잘병4"]
  const menuList = menus.map((menu) => (<li><Link to="/AdminDetail">{menu}</Link></li>));
  return (
      <div className="contentalign">
        <h1>질병 정보 수정</h1>
        <div className="searchAlign">
          <input type="text" className="searchBox"/>
          <button className="searchBtn">search</button>
        </div>

        <div className="containList">
        <ul>
          {menuList}
        </ul>
      </div>
      
      <button className="newDisBtn"><Link to="./AdminDetail">새 질병 추가</Link></button>

      </div>
  )
};
export default AdminDisList;
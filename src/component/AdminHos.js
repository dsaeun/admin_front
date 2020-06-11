import React from "react";
import '../App.css';
import AdminEditSearch from './searchComponent/AdminEditSearch';
import AdminNewHos from './searchComponent/AdminNewHos';

let AdminHos=()=> {
    const menus = ["진료과목1", "진료과목2", "진료과목3", "진료과목4"]
  const menuList = menus.map((menu) => (<li>{menu}</li>));
  return (

    <div>
    <div className="checkedBox">
        진료과목명
        <button className="removeBtn">
            X
        </button>
    </div>
    <AdminEditSearch></AdminEditSearch>

        <div className="editDisList">
        <ul>
          {menuList}
        </ul>
      </div>
      <AdminNewHos></AdminNewHos>
    </div>
  )
}

export default AdminHos;
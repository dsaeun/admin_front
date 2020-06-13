import React from "react";
import '../App.css';
import AdminEditSearch from "./searchComponent/AdminEditSearch";
import AdminNewSym from "./searchComponent/AdminNewSym";

let AdminSym=()=> {
    const menus = ["파트-증상1", "파트-증상2", "파트-증상3", "파트-증상4"]
  const menuList = menus.map((menu) => (<li>{menu}</li>));
  return (

    <div>
      <div className="checkedBox">
          파트-증상명
          <button className="removeBtn">
              X
          </button>
      </div>
      <div>
          <input type="text" className="searchBox"/>
          <button className="searchBtn">search</button>
        </div>

        <div className="editDisList">
        <ul>
          {menuList}
        </ul>
      </div>
      <AdminNewSym></AdminNewSym>
    </div>
    
  )
}

export default AdminSym;
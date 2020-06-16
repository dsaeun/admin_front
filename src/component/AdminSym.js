import React from "react";
import '../App.css';
import AdminEditSearch from "./searchComponent/AdminEditSearch";
import AdminNewSym from "./searchComponent/AdminNewSym";

let AdminSym=()=> {
    const menus = ["파트-증상1", "파트-증상2", "파트-증상3", "파트-증상4"]
  const menuList = menus.map((menu) => (<li>{menu}</li>));
  return (

    <div className="editDisTable">
      <div className="checkedBox">
        파트-질병명
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
      <AdminNewSym></AdminNewSym>
    </div>
    
  )
}

export default AdminSym;
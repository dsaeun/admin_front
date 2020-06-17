import React from "react";
import '../../App.css';

let AdminNewSearch = () => {
  return (
        <div>새 파트-증상 추가 : 
          <input type="text" placeholder="파트" className="newInput"/>
          <input type="text" placeholder="증상" className="newInput"/>
          <button className="addBtn">추가</button>
        </div>
  )
};
export default AdminNewSearch;
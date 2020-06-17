import React from "react";
import '../../App.css';

let AdminNewHos = () => {
  return (
        <div>새 진료과목 추가 : 
          <input type="text" placeholder="진료과목" className="newInput"/>
          <button className="addBtn">추가</button>
        </div>
  )
};
export default AdminNewHos;
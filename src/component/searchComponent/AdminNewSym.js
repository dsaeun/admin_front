import React from "react";
import "../../App.css";

let AdminNewSearch = () => {
  return (
    <div>
      새 파트-증상 추가 :
        {/* 드롭다운으로 파트 id 리스트 출력*/}
      {/*<input type="text" placeholder="파트" className="newInput" />*/}
      <select name="partAdd" className="drop">
        <option value="head">머리</option>
        <option value="belly">배</option>
      </select>
      <input type="text" placeholder="증상" className="newInput" />
      <button type="button" className="addBtn">추가</button>
    </div>
  );
};
export default AdminNewSearch;

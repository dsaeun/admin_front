import React from "react";
import "../../App.css";

let AdminNewSearch = () => {
  return (
    <div>
      새 파트-증상 추가 :
        {/* 드롭다운으로 파트 id 리스트 출력*/}
      <input type="text" placeholder="파트" className="newInput" />
      <input type="text" placeholder="증상" className="newInput" />
      <button type="button" className="addBtn">추가</button>
    </div>
  );
};
export default AdminNewSearch;

import React from "react";
import '../../App.css';

let AdminNewSearch = () => {
  return (
        <div>새 파트-증상 추가 : 
          <input type="text" placeholder="파트"/>
          <input type="text" placeholder="증상"/>
          <button>추가</button>
        </div>
  )
};
export default AdminNewSearch;
import React from "react";
import '../App.css';
import AdminAddText from '../component/AdminAddText';
import AdminDisAdd from '../component/AdminDisAdd';

let AdminDisForm=()=> {
  return (
    <div className="contentalign">
      <button className="Btn">저장</button>
      <h1>질병 수정 및 추가</h1>
      <div className="disFormAlign">
      <AdminAddText></AdminAddText>
      <AdminDisAdd></AdminDisAdd>
      </div>
    </div>
  )
}

export default AdminDisForm;
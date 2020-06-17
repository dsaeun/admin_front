import React from "react";
import '../App.css';
import AdminAddText from '../component/AdminAddText';
import AdminDisAdd from '../component/AdminDisAdd';

let AdminDisEditForm=()=> {
  return (
    <div className="contentalign">
      <h1>질병 수정 및 추가</h1>
      <div className="disFormAlign">
      <AdminAddText></AdminAddText>
      <AdminDisAdd></AdminDisAdd>
      <button className="saveBtn">저장</button>
      </div>
    </div>
  )
}

export default AdminDisEditForm;
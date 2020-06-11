import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

let AdminDetail=()=>{
  return (
    <div className="contentalign">
      <button className="Btn">
        <Link to="./AdminDisForm">수정</Link>
        </button>
      <h1>질병 상세정보</h1>
      <table>
        <tr>
          <td>질병명 : </td>
        </tr>
        <tr>
          <td>치료법 : </td>
        </tr>
        <tr>
          <td>
          증상 : </td>
        </tr>
        <tr>
          <td>진료 병원 : </td>
        </tr>
  </table>
    </div>
  )
  }

export default AdminDetail;
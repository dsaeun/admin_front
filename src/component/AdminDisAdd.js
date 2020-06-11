import React from "react";
import '../App.css';
import AdminSym from './AdminSym';
import AdminHos from './AdminHos';

let AdminDisAdd=()=> {
  return (
    <div>
      <table>
        <tr>
          <td className="symTD">
          증상 : <AdminSym></AdminSym></td>
        </tr>
        <tr>
          <td className="hosTD">진료 병원 : <AdminHos></AdminHos></td>
        </tr>
  </table>
    </div>
  )
}

export default AdminDisAdd;
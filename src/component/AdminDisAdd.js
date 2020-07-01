import React from "react";
import "../App.css";
import AdminSym from "./AdminSym";
import AdminHos from "./AdminHos";

let AdminDisAdd = () => {
  return (
    <div>
      <table className="editDisTable">
        <tr>
          <td className="symTD">
            증상 : <AdminSym/>
          </td>
        </tr>
      </table>
      <table className="editDisTable">
        <tr>
          <td className="hosTD">
            진료 병원 : <AdminHos/>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdminDisAdd;

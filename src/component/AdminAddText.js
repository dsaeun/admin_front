import React from "react";
import '../App.css';

let AdminAddText=()=> {
  return (
    <div>
      <table>
        <tr>
          <td>질병명 : <input type="text"></input></td>
        </tr>
        <tr>
          <td>치료법 : <input type="text"></input></td>
        </tr>
  </table>
    </div>
  )
}

export default AdminAddText;
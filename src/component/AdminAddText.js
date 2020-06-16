import React from "react";
import '../App.css';

let AdminAddText=()=> {
  return (
    <div>
      <table>
        <tr>
          <td>질병명 : <input type="text" className="disInput"></input></td>
        </tr>
        <tr>
          <td>치료법 :</td>
        </tr>
        <tr>
          <td className="cureTD">
            <textarea className="cureInput"></textarea>
          </td>
        </tr>
  </table>
    </div>
  )
}

export default AdminAddText;
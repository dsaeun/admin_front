import React from "react";
import '../App.css';

let AdminAddText=()=> {
  return (
    <div>
      <form id="textAdd">
      <table>
        <tr>
          <td>질병명 : <input type="text" name="inputDisName"></input></td>
        </tr>
        <tr>
          <td>치료법 : <input type="text" name="inputCure"></input></td>
        </tr>
      </table>
      </form>
    </div>
  )
}

export default AdminAddText;
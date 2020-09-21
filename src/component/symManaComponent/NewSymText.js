import React from "react";
import '../../App.css';

let NewSymText = () => {
    return(
        <div className="NewSymText">
            <h2>새 증상 추가</h2>
            <input type="text" className="inputSym"></input>
            <button className="inputSymSave">저장</button>
        </div>
    )
}

export default NewSymText;
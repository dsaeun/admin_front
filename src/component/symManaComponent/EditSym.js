import React from "react";
import '../../App.css';

let EditSym = () => {
    return(
        <div className="EditSym">
            <h2>증상 수정</h2>
            <input type="text" className="editSym"></input>
            <button className="editSymSave">저장</button>
        </div>
    )
}

export default EditSym;
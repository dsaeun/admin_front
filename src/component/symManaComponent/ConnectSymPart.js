import React from "react";
import '../../App.css';

let ConnectSymPart = () => {
    return(
        <div className="ConnectSymPart">
            <h2>증상-파트 연결</h2>
            <div className="connectInfo">
                <h3>증상명</h3>
                <ul>
                    <li className="liStyle">연결되어있는 파트1</li>
                    <li className="liStyle">연결되어있는 파트1</li>
                </ul>
            </div>

            <div className="checkInfo">
                    <input type="text"  className="searchSymptom"/>
                    <button  className="SymptomBtn">
                        search
                    </button>
                <ul className="checklist">
                    <li className="checkli">
                        체크박스가 안뜸
                        {/* 
                        <input type="checkbox" name="symInfo" value="symInfo">
                            <label>증상정보</label>
                        </input>
                        */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ConnectSymPart;
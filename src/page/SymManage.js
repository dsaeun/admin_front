import React from "react";
import '../App.css';
import NewSymText from '../component/symManaComponent/NewSymText';
import EditSym from '../component/symManaComponent/EditSym';
import ConnectSymPart from '../component/symManaComponent/ConnectSymPart';

let SymManage = () => {
    return(
        <div>
            <h1>증상 관리</h1>
            <div className="connectInfo">
                <h2>증상 별 연결정보</h2>
                <h3>증상명</h3>
                <ul>
                    <li className="liStyle">추가된 증상1</li>
                    <li className="liStyle">추가된 증상2</li>
                </ul>
            </div>

            <div className="checkInfo">
                    <input type="text"  className="searchSymptom"/>
                    <button  className="SymptomBtn">
                        search
                    </button>
                <li className="checkli">
                    <label>
                        <input type="radio" name="symInfo" value="symInfo"/>
                            증상정보
                    </label>
                </li>
            </div>
            <p className="caution">* 질병 별 증상, 파트, 진료과목 연결관리는 해당 질병 관리 페이지에서 가능합니다.</p>

            <div  className="manageButtonDiv">
                <button className="manageButton">추가</button>
                <button className="manageButton">수정</button>
                <button className="manageButton">연결</button>
                <button className="manageButton">삭제</button>
            </div>


            <NewSymText/>
            <EditSym/>
            <ConnectSymPart/>
        </div>
    )
};

export default SymManage;
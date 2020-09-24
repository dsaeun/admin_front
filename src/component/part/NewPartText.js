import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const NewPartText = ({ partsRefresh }) => {
    const [partName, setPartName] = useState('')

    return (
        <div className="NewSymText">
            <h2>새 증상 추가</h2>
            <input
                type="text"
                className="inputSym"
                onChange={(event) => setPartName(event.target.value)}
            />
            <button className="inputSymSave" onClick={() => {
                if (!partName) {
                    alert("값이 비어있으면 안됩니다");
                    return;
                }

                axios.post("/parts", {
                    name: partName,
                }).then(() => {
                    alert("관련 부위가 추가되었습니다");
                    partsRefresh();
                }).catch(error => {
                    console.error(error);
                })
            }}>저장</button>
        </div>
    )
}

export default NewPartText

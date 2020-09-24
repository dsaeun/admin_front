import React, { useState } from 'react'
import '../../App.css'
import axios from "axios";

const EditSym = ({ symptomDetail, symptomsRefresh }) => {
    const [symptomName, setSymptomName] = useState('')

    return (
        <div className="EditSym">
            <h2>증상 수정 - {symptomDetail.name}</h2>
            <button className="loadName" onClick={() => setSymptomName(symptomDetail.name)}>불러오기</button>
            <input
                type="text"
                className="editSym"
                value={symptomName}
                onChange={(event) => setSymptomName(event.target.value)}
            />
            <button className="editSymSave" onClick={() => {
                if (!symptomName) {
                    alert("값이 비어있으면 안됩니다");
                    return;
                }

                axios.patch(`/symptoms/${symptomDetail.id}`, {
                    content: {
                        name: symptomName,
                    }
                }).then(() => {
                    alert("증상이 수정되었습니다");
                    symptomsRefresh();
                }).catch(error => {
                    console.error(error);
                })
            }}>저장</button>
        </div>
    )
}

export default EditSym

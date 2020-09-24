import React, { useEffect, useState } from 'react'
import '../../App.css'
import axios from 'axios'
import _ from 'lodash'

const ConnectPartSymptom = ({ partDetail, partsRefresh, symptomsData, setSymptomsData }) => {
    const [keyword, setKeyword] = useState('');
    const [symptomsDetail, setSymptomsDetail] = useState([]);

    // 증상 리스트를 받아와 출력합니다
    const symptoms = symptomsData.map((symptomData, index) => {
        // let checked;
        // for (let symptom of partDetail.symptoms) {
        //     if (symptom.id === symptomData.id) {
        //         checked = true;
        //     }
        // }
        return (
            <li className="checkli" key={index}>
                <label>
                    <input
                        type="checkbox"
                        name="symInfo"
                        value="symInfo"
                        // defaultChecked={checked}
                        onClick={() => {
                            const newArray = symptomsDetail.concat(symptomData)
                            setSymptomsDetail(newArray);
                        }}
                    />
                    {symptomData.name}
                </label>
            </li>
        )
    })

    // 검색 기능
    const onKeyword = () => {
        axios
            .get(`/symptoms/?keyword=${keyword}`)
            .then((response) => {
                setSymptomsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 파트 연결
    const onSubmit = () => {
        for (let symptomDetail of symptomsDetail) {
            axios.patch(`/symptoms/${symptomDetail.id}`, {
                partId: partDetail.id,
            })
                .then(() => {
                    partsRefresh();
                }).catch(error => {
                console.error(error);
            })
        }
        alert("연결이 성공했습니다");
    }

    return (
        <div className="ConnectSymPart">
            <h2>증상-파트 연결</h2>
            <div className="connectInfo">
                <h3>{partDetail.name}</h3>
                <ul>
                    {!_.isEmpty(partDetail.symptoms) ? partDetail.symptoms.map((symptom, index) => (
                        <li className="liStyle" key={index}>
                            {symptom.name}
                        </li>
                    )) : <p>관련 증상이 없습니다</p>}
                </ul>
            </div>

            <div className="checkInfo">
                <input
                    type="text"
                    className="searchSymptom"
                    value={keyword}
                    onChange={(event) => {
                        setKeyword(event.target.value)
                    }}
                />
                <button className="SymptomBtn" onClick={() => onKeyword()}>search</button>
                <ul className="checklist">{symptoms}</ul>
            </div>
            <button className="saveButton" onClick={() => onSubmit()}>저장</button>
        </div>
    )
}

export default ConnectPartSymptom

import React, { useEffect, useState } from 'react'
import '../../App.css'
import axios from 'axios'

const ConnectSymPart = ({ symptomDetail, symptomsRefresh, partsData, setPartsData }) => {
    const [keyword, setKeyword] = useState('');
    const [partDetail, setPartDetail] = useState({});

    // 파트 리스트를 받아와 출력합니다
    const parts = partsData.map((partData, index) => {
        return (
            <li className="checkli" key={index}>
                <label>
                    <input
                        type="radio"
                        name="symInfo"
                        value="symInfo"
                        defaultChecked={
                            symptomDetail.partId === partData.id ? true : false
                        }
                        onClick={() => {
                            setPartDetail(partData);
                        }}
                    />
                    {partData.name}
                </label>
            </li>
        )
    })

    // 검색 기능
    const onKeyword = () => {
        axios
            .get(`/parts/?keyword=${keyword}`)
            .then((response) => {
                setPartsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 파트 연결
    const onSubmit = () => {
        axios.patch(`/symptoms/${symptomDetail.id}`, {
            partId: partDetail.id,
        })
            .then(() => {
                alert("연결이 성공했습니다");
                symptomsRefresh();
            }).catch(error => {
                console.error(error);
        })
    }

    return (
        <div className="ConnectSymPart">
            <h2>증상-파트 연결</h2>
            <div className="connectInfo">
                <h3>{symptomDetail.name}</h3>
                <ul>
                    <li className="liStyle">
                        {symptomDetail.part ? (
                            symptomDetail.part.name
                        ) : (
                            "연결된 관련 부위가 없습니다"
                        )}
                    </li>
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
                <ul className="checklist">{parts}</ul>
            </div>
            <button className="saveButton" onClick={() => onSubmit()}>저장</button>
        </div>
    )
}

export default ConnectSymPart

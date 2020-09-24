import React, { useEffect, useState } from 'react'
import '../App.css'
import NewSymText from '../component/symManaComponent/NewSymText'
import EditSym from '../component/symManaComponent/EditSym'
import ConnectSymPart from '../component/symManaComponent/ConnectSymPart'
import axios from 'axios'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const SymManage = () => {
    /**
     * symptomsData: 기존 증상 리스트
     * symptomDetail: 기존 증상 상세 내용
     * visible: 추가, 수정, 연결 컴포넌트 렌더링 여부
     */
    const [symptomsData, setSymptomsData] = useState([])
    const [symptomDetail, setSymptomDetail] = useState({})
    const [visible, setVisible] = useState({
        NewSymText: false,
        EditSym: false,
        ConnectSymPart: false,
    })
    const [keyword, setKeyword] = useState('')
    const [partsData, setPartsData] = useState([]);

    // 증상 데이터를 불러옵니다
    useEffect(() => {
        axios
            .get('/symptoms')
            .then((response) => {
                setSymptomsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // 증상 리스트를 받아와 출력합니다
    const symptoms = symptomsData.map((symptomData, index) => (
        <li className="checkli" key={index}>
            <label>
                <input
                    type="radio"
                    name="symInfo"
                    value="symInfo"
                    onClick={() => {
                        axios
                            .get(`/symptoms/${symptomData.id}`)
                            .then((response) => {
                                setSymptomDetail(response.data)
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    }}
                />
                {symptomData.part ? symptomData.part.name : '관련 부위 없음'} - {symptomData.name}
            </label>
        </li>
    ))

    // 증상에 연결된 질병 리스트를 받아와 출력합니다
    let diseases
    if (symptomDetail.diseases && !_.isEmpty(symptomDetail.diseases)) {
        diseases = symptomDetail.diseases.map((disease, index) => (
            <li className="liStyle" key={index}>
                <Link to={`/AdminDetail/${disease.id}`}>{disease.name}</Link>
            </li>
        ))
    } else {
        diseases = <p>연결된 질병 정보가 표시됩니다</p>
    }

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

    // 삭제
    const onDelete = () => {
        if (_.isEmpty(symptomDetail)) {
            alert('삭제할 증상을 선택해주세요')
            return;
        }
        axios
            .delete(`/symptoms/${symptomDetail.id}`)
            .then((response) => {
                alert(response.data.message);
                symptomsRefresh();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 추가, 수정, 관계 연결 시 리스트를 리렌더링합니다
    const symptomsRefresh = () => {
        setSymptomsData([]);
        axios
            .get('/symptoms')
            .then((response) => {
                setSymptomsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        axios
            .get(`/symptoms/${symptomDetail.id}`)
            .then((response) => {
                if (response.data) {
                    setSymptomDetail(response.data);
                } else {
                    setSymptomDetail({});
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>증상 관리</h1>
            <div className="connectInfo">
                <h2>증상 별 연결정보</h2>
                <h3>{symptomDetail.name}</h3>
                <ul>{diseases}</ul>
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
                <button className="SymptomBtn" onClick={() => onKeyword()}>
                    search
                </button>
                {symptoms}
            </div>

            <p className="caution">
                * 질병 별 증상, 파트, 진료과목 연결관리는 해당 질병 관리
                페이지에서 가능합니다.
            </p>

            <div className="manageButtonDiv">
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() =>
                        visible.NewSymText
                            ? setVisible({
                                  ...visible,
                                  NewSymText: false,
                              })
                            : setVisible({
                                  ...visible,
                                  NewSymText: true,
                              })
                    }
                >
                    추가
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(symptomDetail)) {
                            alert('증상을 선택해야 합니다')
                            return
                        }
                        visible.EditSym
                            ? setVisible({
                                  ...visible,
                                  EditSym: false,
                              })
                            : setVisible({
                                  ...visible,
                                  EditSym: true,
                              })
                    }}
                >
                    수정
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(symptomDetail)) {
                            alert('증상을 선택해야 합니다')
                            return
                        }

                        if (!visible.ConnectSymPart) {
                            setVisible({
                                ...visible,
                                ConnectSymPart: true,
                            })
                            axios.get("/parts")
                                .then(response => {
                                    setPartsData(response.data);
                                }).catch(error => {
                                console.error(error);
                            })
                        } else {
                            setVisible({
                                ...visible,
                                ConnectSymPart: false,
                            })
                        }
                    }}
                >
                    연결
                </button>
                <button className="manageButton" onClick={() => onDelete()}>
                    삭제
                </button>
            </div>

            {visible.NewSymText ? (
                <NewSymText symptomsRefresh={symptomsRefresh} />
            ) : null}
            {visible.EditSym ? (
                <EditSym
                    symptomDetail={symptomDetail}
                    symptomsRefresh={symptomsRefresh}
                />
            ) : null}
            {visible.ConnectSymPart ? (
                <ConnectSymPart
                    symptomDetail={symptomDetail}
                    symptomsRefresh={symptomsRefresh}
                    partsData={partsData}
                    setPartsData={setPartsData}
                />
            ) : null}
        </div>
    )
}

export default SymManage

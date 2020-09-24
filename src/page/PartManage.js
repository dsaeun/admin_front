import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import ConnectPartSymptom from "../component/part/ConnectPartSymptom";
import EditPart from "../component/part/EditPart";
import NewPartText from "../component/part/NewPartText";

const PartManage = () => {
    /**
     * partsData: 기존 파트 리스트
     * partDetail: 기존 파트 상세 내용
     * visible: 추가, 수정, 연결 컴포넌트 렌더링 여부
     */
    const [partsData, setPartsData] = useState([])
    const [partDetail, setPartDetail] = useState({})
    const [visible, setVisible] = useState({
        NewPartText: false,
        EditPart: false,
        ConnectPartSymptom: false,
    })
    const [keyword, setKeyword] = useState('')
    const [symptomsData, setSymptomsData] = useState([]);

    // 파트 데이터를 불러옵니다
    useEffect(() => {
        axios
            .get('/parts')
            .then((response) => {
                setPartsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // 파트 리스트를 받아와 출력합니다
    const parts = partsData.map((partData, index) => (
        <li className="checkli" key={index}>
            <label>
                <input
                    type="radio"
                    name="partInfo"
                    value="partInfo"
                    onClick={() => {
                        axios
                            .get(`/parts/${partData.id}`)
                            .then((response) => {
                                setPartDetail(response.data)
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    }}
                />
                {partData.name}
            </label>
        </li>
    ))

    // 증상에 연결된 질병 리스트를 받아와 출력합니다
    let diseases
    if (partDetail.diseases && !_.isEmpty(partDetail.diseases)) {
        diseases = partDetail.diseases.map((disease, index) => (
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
            .get(`/parts/?keyword=${keyword}`)
            .then((response) => {
                setPartsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 삭제
    const onDelete = () => {
        if (_.isEmpty(partDetail)) {
            alert('삭제할 부위를 선택해주세요')
            return;
        }
        axios
            .delete(`/parts/${partDetail.id}`)
            .then((response) => {
                alert(response.data.message);
                partsRefresh();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 추가, 수정, 관계 연결 시 리스트를 리렌더링합니다
    const partsRefresh = () => {
        setPartsData([]);
        axios
            .get('/parts')
            .then((response) => {
                setPartsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        axios
            .get(`/parts/${partDetail.id}`)
            .then((response) => {
                if (response.data) {
                    setPartDetail(response.data);
                } else {
                    setPartDetail({});
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>부위 관리</h1>
            <div className="connectInfo">
                <h2>부위별 연결정보</h2>
                <h3>{partDetail.name}</h3>
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
                {parts}
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
                        visible.NewPartText
                            ? setVisible({
                                ...visible,
                                NewPartText: false,
                            })
                            : setVisible({
                                ...visible,
                                NewPartText: true,
                            })
                    }
                >
                    추가
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(partDetail)) {
                            alert('부위를 선택해야 합니다')
                            return
                        }
                        visible.EditPart
                            ? setVisible({
                                ...visible,
                                EditPart: false,
                            })
                            : setVisible({
                                ...visible,
                                EditPart: true,
                            })
                    }}
                >
                    수정
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(partDetail)) {
                            alert('부위를 선택해야 합니다')
                            return
                        }

                        if (!visible.ConnectSymPart) {
                            setVisible({
                                ...visible,
                                ConnectPartSymptom: true,
                            })
                            axios.get("/symptoms")
                                .then(response => {
                                    setSymptomsData(response.data);
                                }).catch(error => {
                                console.error(error);
                            })
                        } else {
                            setVisible({
                                ...visible,
                                ConnectPartSymptom: false,
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

            {visible.NewPartText ? (
                <NewPartText partsRefresh={partsRefresh} />
            ) : null}
            {visible.EditPart ? (
                <EditPart
                    partDetail={partDetail}
                    partsRefresh={partsRefresh}
                />
            ) : null}
            {visible.ConnectPartSymptom ? (
                <ConnectPartSymptom
                    partDetail={partDetail}
                    partsRefresh={partsRefresh}
                    symptomsData={symptomsData}
                    setSymptomsData={setSymptomsData}
                />
            ) : null}
        </div>
    )
}

export default PartManage

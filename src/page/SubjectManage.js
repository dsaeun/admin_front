import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import EditSubject from "../component/subject/EditSubject";
import NewSubjectText from "../component/subject/NewSubjectText";

const SubjectManage = () => {
    /**
     * subjectsData: 기존 진료과목 리스트
     * subjectDetail: 기존 진료과목 상세 내용
     * visible: 추가, 수정, 연결 컴포넌트 렌더링 여부
     */
    const [subjectsData, setSubjectsData] = useState([])
    const [subjectDetail, setSubjectDetail] = useState({})
    const [visible, setVisible] = useState({
        NewSubjectText: false,
        EditSubject: false,
    })
    const [keyword, setKeyword] = useState('')

    // 진료과목 데이터를 불러옵니다
    useEffect(() => {
        axios
            .get('/subjects')
            .then((response) => {
                setSubjectsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // 진료과목 리스트를 받아와 출력합니다
    const subjects = subjectsData.map((subjectData, index) => (
        <li className="checkli" key={index}>
            <label>
                <input
                    type="radio"
                    name="symInfo"
                    value="symInfo"
                    onClick={() => {
                        axios
                            .get(`/subjects/${subjectData.id}`)
                            .then((response) => {
                                setSubjectDetail(response.data)
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    }}
                />
                {subjectData.name}
            </label>
        </li>
    ))

    // 진료과목에 연결된 질병 리스트를 받아와 출력합니다
    let diseases
    if (subjectDetail.diseases && !_.isEmpty(subjectDetail.diseases)) {
        diseases = subjectDetail.diseases.map((disease, index) => (
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
            .get(`/subjects/?keyword=${keyword}`)
            .then((response) => {
                setSubjectsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 삭제
    const onDelete = () => {
        if (_.isEmpty(subjectDetail)) {
            alert('삭제할 진료과목을 선택해주세요')
            return;
        }
        axios
            .delete(`/subjects/${subjectDetail.id}`)
            .then((response) => {
                alert(response.data.message);
                subjectsRefresh();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 추가, 수정, 관계 연결 시 리스트를 리렌더링합니다
    const subjectsRefresh = () => {
        setSubjectsData([]);
        axios
            .get('/subjects')
            .then((response) => {
                setSubjectsData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        axios
            .get(`/subjects/${subjectDetail.id}`)
            .then((response) => {
                if (response.data) {
                    setSubjectDetail(response.data);
                } else {
                    setSubjectDetail({});
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>진료과목 관리</h1>
            <div className="connectInfo">
                <h2>진료과목 별 연결정보</h2>
                <h3>{subjectDetail.name}</h3>
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
                {subjects}
            </div>

            <p className="caution">
                * 질병 별 진료과목, 파트, 진료과목 연결관리는 해당 질병 관리
                페이지에서 가능합니다.
            </p>

            <div className="manageButtonDiv">
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() =>
                        visible.NewSubjectText
                            ? setVisible({
                                ...visible,
                                NewSubjectText: false,
                            })
                            : setVisible({
                                ...visible,
                                NewSubjectText: true,
                            })
                    }
                >
                    추가
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(subjectDetail)) {
                            alert('진료과목을 선택해야 합니다')
                            return
                        }
                        visible.EditSubject
                            ? setVisible({
                                ...visible,
                                EditSubject: false,
                            })
                            : setVisible({
                                ...visible,
                                EditSubject: true,
                            })
                    }}
                >
                    수정
                </button>
                <button className="manageButton" onClick={() => onDelete()}>
                    삭제
                </button>
            </div>

            {visible.NewSubjectText ? (
                <NewSubjectText subjectsRefresh={subjectsRefresh} />
            ) : null}
            {visible.EditSubject ? (
                <EditSubject
                    subjectDetail={subjectDetail}
                    subjectsRefresh={subjectsRefresh}
                />
            ) : null}
        </div>
    )
}

export default SubjectManage

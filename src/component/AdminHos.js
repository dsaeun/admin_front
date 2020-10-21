import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import AdminNewHos from './searchComponent/AdminNewHos'
import DiseaseContext from '../container/Disease/disease'
import axios from 'axios'

let AdminHos = () => {
  const { state, actions } = useContext(DiseaseContext)
  const { subjects } = state
  const { setSubjects } = actions
  const [subjectsData, setSubjectsData] = useState([])
  const [keyword, setKeyword] = useState('')

  // 증상 목록을 불러온다
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

  // 추가할 증상을 선택한다
  const onClick = (subject) => {
    const { id, name } = subject

    for (let subjectIndex of subjects) {
      if (subjectIndex.id === id) {
        return
      }
    }

    const newSubjects = subjects.concat({
      id,
      name,
    })
    setSubjects(newSubjects)
  }
  // 선택한 증상을 선택 취소한다
  const onRemove = (subjectRequest) => {
    const newSubjects = subjects.filter(
      (subject) => subject.id !== subjectRequest.id
    )
    setSubjects(newSubjects)
  }

  // 증상 목록
  const subjectList = subjectsData.map((subject, index) => (
    <li key={index} onClick={() => onClick(subject)}>
      {subject.name}
    </li>
  ))
  // 선택한 증상 목록
  const subjectListSelected = subjects.map((subject, index) => (
    <div className="checkedBox" key={index}>
      {subject.name}
      <button
        type="button"
        className="removeBtn"
        onClick={() => onRemove(subject)}
      >
        X
      </button>
    </div>
  ))
  // keyword 검색
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

  return (
    <div>
      {subjectListSelected}
      <div>
        <input
          type="text"
          className="searchBox"
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value)
          }}
        />
        <button className="searchBtn" type="button" onClick={() => onKeyword()}>
          search
        </button>
      </div>

      <div className="editDisList">
        <ul>{subjectList}</ul>
      </div>
      <AdminNewHos
        subjectsData={subjectsData}
        setSubjectsData={setSubjectsData}
      />
    </div>
  )
}

export default AdminHos

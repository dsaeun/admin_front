import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import AdminNewSym from './searchComponent/AdminNewSym'
import axios from 'axios'
import DiseaseContext from '../container/Disease/disease'

let AdminSym = () => {
  const { state, actions } = useContext(DiseaseContext)
  const { symptoms, parts } = state
  const { setSymptoms, setParts } = actions
  const [symptomsData, setSymptomsData] = useState([])
  const [keyword, setKeyword] = useState('')

  // 증상 목록을 불러온다
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

  // 추가할 증상을 선택한다
  const onClick = (symptom) => {
    const { id, name, part } = symptom

    for (let symptomIndex of symptoms) {
      if (symptomIndex.id === id) {
        return
      }
    }

    const newSymptoms = symptoms.concat({
      id,
      name,
      part_name: part ? part.name : '관련 부위 없음',
      part,
    })
    setSymptoms(newSymptoms)

    if (part) {
      const newPart = parts.concat({
        id: part.id,
      })
      setParts(newPart)
    }
  }
  // 선택한 증상을 선택 취소한다
  const onRemove = (symptomRequest) => {
    const newSymptoms = symptoms.filter(
      (symptom) => symptom.id !== symptomRequest.id
    )
    setSymptoms(newSymptoms)
  }

  // 증상 목록
  const symptomList = symptomsData.map((symptom, index) => (
    <li key={index} onClick={() => onClick(symptom)}>
      {symptom.part ? symptom.part.name : '관련 부위 없음'} - {symptom.name}
    </li>
  ))
  // 선택한 증상 목록
  const symptomListSelected = symptoms.map((symptom, index) => (
    <div className="checkedBox" key={index}>
      {symptom.part ? symptom.part.name : "관련 부위 없음"} - {symptom.name}
      <button
        type="button"
        className="removeBtn"
        onClick={() => onRemove(symptom)}
      >
        X
      </button>
    </div>
  ))
  // keyword 검색
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

  return (
    <div className="editDisTable">
      {symptomListSelected}
      <div>
        <input
          type="text"
          className="searchBox"
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value)
          }}
        />
        <button type="button" className="searchBtn" onClick={() => onKeyword()}>
          search
        </button>
      </div>
      <div className="editDisList">
        <ul>{symptomList}</ul>
      </div>
      <AdminNewSym
        symptomsData={symptomsData}
        setSymptomsData={setSymptomsData}
      ></AdminNewSym>
    </div>
  )
}

export default AdminSym

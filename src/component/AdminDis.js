import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import DiseaseContext from '../container/Disease/disease'
import _ from 'lodash'

/**
 * 질병 목록을 출력해서 상위 질병을 등록하는 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */

let AdminDis = () => {
  const { state, actions } = useContext(DiseaseContext)
  const { disease, selectedDisease } = state
  const { setDisease, setSelectedDisease } = actions
  const [diseasesData, setDiseasesData] = useState([])
  const [keyword, setKeyword] = useState('')

  // 질병 목록을 불러온다
  useEffect(() => {
    axios
      .get('/diseases')
      .then((response) => {
        setDiseasesData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // 추가할 질병을 선택한다
  const onClick = (clickedDisease) => {
    const { id } = clickedDisease

    if (disease.id === id) {
      return
    }

    const newDisease = {
      ...disease,
      parent_id: id,
    }
    setDisease(newDisease)
    setSelectedDisease(clickedDisease)
  }
  // 선택한 질병을 선택 취소한다
  const onRemove = () => {
    const newDisease = {
      ...disease,
      parent_id: null,
    }
    setDisease(newDisease)
    setSelectedDisease({})
  }

  // 증상 목록
  const diseaseList = diseasesData.map((diseaseData, index) => (
    <li key={index} onClick={() => onClick(diseaseData)}>
      {diseaseData.name}
    </li>
  ))
  // 선택한 증상 목록
  const diseaseListSelected = (
    <div className="checkedBox">
      {selectedDisease.name}
      <button type="button" className="removeBtn" onClick={() => onRemove()}>
        X
      </button>
    </div>
  )
  // keyword 검색
  const onKeyword = () => {
    axios
      .get(`/diseases/?keyword=${keyword}`)
      .then((response) => {
        setDiseasesData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="editDisTableDisList">
      {_.isEmpty(selectedDisease) ? null : diseaseListSelected}
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
        <ul>{diseaseList}</ul>
      </div>
    </div>
  )
}

export default AdminDis

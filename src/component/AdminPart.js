import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import AdminNewPart from './searchComponent/AdminNewPart'
import DiseaseContext from '../container/Disease/disease'
import axios from 'axios'

let AdminPart = () => {
    const { state, actions } = useContext(DiseaseContext)
    const { parts } = state
    const { setParts } = actions
    const [partsData, setPartsData] = useState([])
    const [keyword, setKeyword] = useState('')

    // 파트 목록을 불러온다
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

    // 추가할 파트를 선택한다
    const onClick = (part) => {
        const { id, name } = part

        for (let partIndex of parts) {
            if (partIndex.id === id) {
                return
            }
        }

        const newParts = parts.concat({
            id,
            name,
        })
        setParts(newParts)
    }
    // 선택한 파트을 선택 취소한다
    const onRemove = (partRequest) => {
        const newParts = parts.filter(
            (part) => part.id !== partRequest.id
        )
        setParts(newParts)
    }

    // 파트 목록
    const partList = partsData.map((part, index) => (
        <li key={index} onClick={() => onClick(part)}>
            {part.name}
        </li>
    ))
    // 선택한 파트 목록
    const partListSelected = parts.map((part, index) => (
        <div className="checkedBox" key={index}>
            {part.name}
            <button
                type="button"
                className="removeBtn"
                onClick={() => onRemove(part)}
            >
                X
            </button>
        </div>
    ))
    // keyword 검색
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

    return (
        <div>
            {partListSelected}
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
                <ul>{partList}</ul>
            </div>
            <AdminNewPart
                partsData={partsData}
                setPartsData={setPartsData}
            />
        </div>
    )
}

export default AdminPart

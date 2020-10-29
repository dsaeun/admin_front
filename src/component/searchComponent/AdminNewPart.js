import React, {useContext, useState} from 'react'
import '../../App.css'
import axios from 'axios'
import DiseaseContext from "../../container/Disease/disease";

let AdminNewPart = () => {
    const [part, setPart] = useState({
        name: '',
    })
    const { state, actions } = useContext(DiseaseContext)
    const { partsData } = state
    const { setPartsData } = actions

    // 파트 데이터 보내기
    const onSubmit = () => {
        axios
            .post('/parts', part)
            .then((response) => {
                const newPartsData = partsData.concat(response.data)
                setPartsData(newPartsData)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            새 관련 부위 추가 :
            <input
                type="text"
                placeholder="관련 부위"
                className="newInput"
                onChange={(event) => {
                    const newPart = {
                        ...part,
                        name: event.target.value,
                    }
                    setPart(newPart)
                }}
            />
            <button className="addBtn" type="button" onClick={() => onSubmit()}>
                추가
            </button>
        </div>
    )
}
export default AdminNewPart

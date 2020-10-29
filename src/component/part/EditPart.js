import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const EditPart = ({ partDetail, partsRefresh }) => {
  const [partName, setPartName] = useState('')

  return (
    <div className="EditSym">
      <h2>부위 수정 - {partDetail.name}</h2>
      <input
        type="text"
        className="editSym"
        value={partName}
        onChange={(event) => setPartName(event.target.value)}
      />
      <button className="loadName" onClick={() => setPartName(partDetail.name)}>
        불러오기
      </button>
      <button
        className="editSymSave"
        onClick={() => {
          if (!partName) {
            alert('값이 비어있으면 안됩니다')
            return
          }

          axios
            .patch(`/parts/${partDetail.id}`, {
              name: partName,
            })
            .then(() => {
              alert('관련 부위가 수정되었습니다')
              partsRefresh()
            })
            .catch((error) => {
              console.error(error)
            })
        }}
      >
        저장
      </button>
    </div>
  )
}

export default EditPart

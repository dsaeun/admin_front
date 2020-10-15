import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const NewSymText = ({ symptomsRefresh }) => {
  const [symptomName, setSymptomName] = useState('')

  return (
    <div className="NewSymText">
      <h2>새 증상 추가</h2>
      <input
        type="text"
        className="inputSym"
        onChange={(event) => setSymptomName(event.target.value)}
      />
      <button
        className="inputSymSave"
        onClick={() => {
          if (!symptomName) {
            alert('값이 비어있으면 안됩니다')
            return
          }

          axios
            .post('/symptoms', {
              content: {
                name: symptomName,
              },
            })
            .then(() => {
              alert('증상이 추가되었습니다')
              symptomsRefresh()
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

export default NewSymText

import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const NewSubjectText = ({ subjectsRefresh }) => {
  const [subject, setSubject] = useState({
    name: '',
    code: '',
  })

  return (
    <div className="NewSymText">
      <h2>새 진료과목 추가</h2>
      <input
        placeholder="과목명"
        type="text"
        className="inputSym"
        onChange={(event) =>
          setSubject({
            ...subject,
            name: event.target.value,
          })
        }
      />
      <input
        placeholder="코드"
        type="text"
        className="inputSym"
        onChange={(event) =>
          setSubject({
            ...subject,
            code: event.target.value,
          })
        }
      />
      <button
        className="inputSymSave"
        onClick={() => {
          if (!subject.name) {
            alert('값이 비어있으면 안됩니다')
            return
          }

          axios
            .post('/subjects', subject)
            .then(() => {
              alert('진료과목이 추가되었습니다')
              subjectsRefresh()
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

export default NewSubjectText

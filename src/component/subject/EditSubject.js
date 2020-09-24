import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const EditSubject = ({ subjectDetail, subjectsRefresh }) => {
    const [subject, setSubject] = useState({
        name: '',
        code: '',
    })

    return (
        <div className="EditSym">
            <h2>진료과목 수정 - {subjectDetail.name}</h2>
            <button
                className="loadName"
                onClick={() =>
                    setSubject({
                        ...subject,
                        name: subjectDetail.name,
                        code: subjectDetail.code,
                    })
                }
            >
                불러오기
            </button>
            <input
                type="text"
                className="editSym"
                value={subject.name}
                onChange={(event) =>
                    setSubject({
                        ...subject,
                        name: event.target.value,
                    })
                }
            />
            <input
                type="text"
                className="editSym"
                value={subject.code}
                onChange={(event) =>
                    setSubject({
                        ...subject,
                        code: event.target.value,
                    })
                }
            />
            <button
                className="editSymSave"
                onClick={() => {
                    if (!subject.name) {
                        alert('값이 비어있으면 안됩니다')
                        return
                    }

                    axios
                        .patch(`/subjects/${subjectDetail.id}`, subject)
                        .then(() => {
                            alert('진료과목이 수정되었습니다')
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

export default EditSubject

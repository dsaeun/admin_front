import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const EditUser = ({ userDetail, usersRefresh }) => {
    const [user, setUser] = useState({
        nickname: '',
        role: '',
    })

    return (
        <div className="EditSym">
            <h2>관리자 수정 - {userDetail.nickname}</h2>
            <button
                className="loadName"
                onClick={() =>
                    setUser({
                        ...user,
                        nickname: userDetail.nickname,
                        role: userDetail.role,
                    })
                }
            >
                불러오기
            </button>
            <input
                type="text"
                className="editSym"
                value={user.nickname}
                onChange={(event) =>
                    setUser({
                        ...user,
                        nickname: event.target.value,
                    })
                }
            />
            <input
                type="text"
                className="editSym"
                value={user.role}
                onChange={(event) =>
                    setUser({
                        ...user,
                        role: event.target.value,
                    })
                }
            />
            <button
                className="editSymSave"
                onClick={() => {
                    if (!user.nickname) {
                        alert('값이 비어있으면 안됩니다')
                        return
                    }

                    axios
                        .patch(`/users/${userDetail.id}`, user)
                        .then(() => {
                            alert('관리자가 수정되었습니다')
                            usersRefresh()
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

export default EditUser
